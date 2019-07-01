<template>

    <div style="width:500px;">
        <q-form
                @submit="onSubmit"
                class="q-gutter-md"
        >
            <q-input

                    v-model="username"
                    label="username *"
                    hint="username"
            />

            <q-input
                    type="number"
                    v-model="password"
                    label="password *"

            />
            <div>
                {{response}}
                <q-btn label="Submit" type="submit" color="primary"/>
            </div>
        </q-form>
    </div>

</template>

<script>
    import store from "../assets/store";
    import axios from "axios";

    export default {
        name: "Login",
        data: ()=>({
            username:'',
            password:'',
            response: null
        }),
        methods:{
            onSubmit(){
                axios.post('https://localhost:44386/api/Home',{
                    username:this.username,
                    password:this.password,
                }).then(resp=>{
                    this.response = resp;
                }).catch(err=>{
                    this.response = err;
                })
            }
        }
    }
</script>

<style scoped>

</style>