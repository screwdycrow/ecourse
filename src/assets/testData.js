export default {
    getUnits() {
        return [
            {
                unitID: 0,
                title: 'General concepts in C# ',
                description: 'In this unit we will see how to use classes and objects',
                chapters: [
                    {
                        chapterID: 0,
                        title: 'lesson 1',
                        unitID: 0,
                        content: 'sdsddsddsd',
                        video: 'https://www.youtube.com/embed/pSiIHe2uZ2w'
                    },
                    {
                        chapterID: 1,
                        title: 'lesson 2',
                        unitID: 0,
                        content: 'dsdsdsdsdsd',
                        video: 'https://www.youtube.com/embed/udoMi4mGYYw'
                    },
                ]
            }, {
                unitID: 1,
                title: 'Operators and data types in c#',
                description: 'in this section we will get to know about operators and datatypes.',
                chapters: [
                    {
                        chapterID: 2,
                        title: 'Variables',
                        unitID: 2,
                    },
                    {
                        chapterID: 3,
                        title: 'Pointers',
                        unitID: 2,
                    },
                    {
                        chapterID: 4,
                        title: 'Operators',
                        unitID: 2,
                    }
                ]
            },
        ]
    },

    getChapters() {
        return [
            {
                chapterID: 0,
                title: 'Lesson 1',
                unitID: 0,
                content: `<p>n this chapter, we will discuss the tools required for creating C# programming. We have already mentioned that C# is part of .Net framework and is used for writing .Net applications. Therefore, before discussing the available tools for running a C# program, let us understand how C# relates to the .Net framework.</p>
<h6>The .Net Framework</h6>
<p>The .Net framework is a revolutionary platform that helps you to write the following types of applications &minus;</p>
<ul>
<li>Windows applications</li>
<li>Web applications</li>
<li>Web services</li>
</ul>
<p>The .Net framework applications are multi-platform applications. The framework has been designed in such a way that it can be used from any of the following languages: C#, C++, Visual Basic, Jscript, COBOL, etc. All these languages can access the framework as well as communicate with each other.</p>
<p>The .Net framework consists of an enormous library of codes used by the client languages such as C#. Following are some of the components of the .Net framework &minus;</p>
<ul>
<li>Common Language Runtime (CLR)</li>
<li>The .Net Framework Class Library</li>
<li>Common Language Specification</li>
<li>Common Type System</li>
<li>Metadata and Assemblies</li>
<li>Windows Forms</li>
<li>ASP.Net and ASP.Net AJAX</li>
<li>ADO.Net</li>
<li>Windows Workflow Foundation (WF)</li>
<li>Windows Presentation Foundation</li>
<li>Windows Communication Foundation (WCF)</li>
<li>LINQ</li>
</ul>
<p>For the jobs each of these components perform, please see&nbsp;<a href="https://www.tutorialspoint.com/asp.net/asp.net_introduction.htm">ASP.Net - Introduction</a>, and for details of each component, please consult Microsoft's documentation.</p>
<h6>Integrated Development Environment (IDE) for C#</h6>
<p>Microsoft provides the following development tools for C# programming &minus;</p>
<ul>
<li>Visual Studio 2010 (VS)</li>
<li>Visual C# 2010 Express (VCE)</li>
<li>Visual Web Developer</li>
</ul>
<p>The last two are freely available from Microsoft official website. Using these tools, you can write all kinds of C# programs from simple command-line applications to more complex applications. You can also write C# source code files using a basic text editor, like Notepad, and compile the code into assemblies using the command-line compiler, which is again a part of the .NET Framework.</p>
<p>Visual C# Express and Visual Web Developer Express edition are trimmed down versions of Visual Studio and has the same appearance. They retain most features of Visual Studio. In this tutorial, we have used Visual C# 2010 Express.</p>
<p>You can download it from&nbsp;<a href="https://www.microsoft.com/visualstudio/eng/downloads" target="_blank" rel="nofollow">Microsoft Visual Studio</a>. It gets installed automatically on your machine.</p>
<p>Note: You need an active internet connection for installing the express edition.</p>`,
                video: 'https://www.youtube.com/embed/pSiIHe2uZ2w'
            },
            {
                chapterID: 1,
                title: 'Lesson 2',
                unitID: 0,
                content: '<p>n this chapter, we will discuss the tools required for creating C# programming. We have already mentioned that C# is part of .Net framework and is used for writing .Net applications. Therefore, before discussing the available tools for running a C# program, let us understand how C# relates to the .Net framework.</p>\n' +
                    '<h2>The .Net Framework</h2>\n' +
                    '<p>The .Net framework is a revolutionary platform that helps you to write the following types of applications &minus;</p>\n' +
                    '<ul>\n' +
                    '<li>Windows applications</li>\n' +
                    '<li>Web applications</li>\n' +
                    '<li>Web services</li>\n' +
                    '</ul>\n' +
                    '<p>The .Net framework applications are multi-platform applications. The framework has been designed in such a way that it can be used from any of the following languages: C#, C++, Visual Basic, Jscript, COBOL, etc. All these languages can access the framework as well as communicate with each other.</p>\n' +
                    '<p>The .Net framework consists of an enormous library of codes used by the client languages such as C#. Following are some of the components of the .Net framework &minus;</p>\n' +
                    '<ul>\n' +
                    '<li>Common Language Runtime (CLR)</li>\n' +
                    '<li>The .Net Framework Class Library</li>\n' +
                    '<li>Common Language Specification</li>\n' +
                    '<li>Common Type System</li>\n' +
                    '<li>Metadata and Assemblies</li>\n' +
                    '<li>Windows Forms</li>\n' +
                    '<li>ASP.Net and ASP.Net AJAX</li>\n' +
                    '<li>ADO.Net</li>\n' +
                    '<li>Windows Workflow Foundation (WF)</li>\n' +
                    '<li>Windows Presentation Foundation</li>\n' +
                    '<li>Windows Communication Foundation (WCF)</li>\n' +
                    '<li>LINQ</li>\n' +
                    '</ul>\n' +
                    '<p>For the jobs each of these components perform, please see&nbsp;<a href="https://www.tutorialspoint.com/asp.net/asp.net_introduction.htm">ASP.Net - Introduction</a>, and for details of each component, please consult Microsoft\'s documentation.</p>\n' +
                    '<h2>Integrated Development Environment (IDE) for C#</h2>\n' +
                    '<p>Microsoft provides the following development tools for C# programming &minus;</p>\n' +
                    '<ul>\n' +
                    '<li>Visual Studio 2010 (VS)</li>\n' +
                    '<li>Visual C# 2010 Express (VCE)</li>\n' +
                    '<li>Visual Web Developer</li>\n' +
                    '</ul>\n' +
                    '<p>The last two are freely available from Microsoft official website. Using these tools, you can write all kinds of C# programs from simple command-line applications to more complex applications. You can also write C# source code files using a basic text editor, like Notepad, and compile the code into assemblies using the command-line compiler, which is again a part of the .NET Framework.</p>\n' +
                    '<p>Visual C# Express and Visual Web Developer Express edition are trimmed down versions of Visual Studio and has the same appearance. They retain most features of Visual Studio. In this tutorial, we have used Visual C# 2010 Express.</p>\n' +
                    '<p>You can download it from&nbsp;<a href="https://www.microsoft.com/visualstudio/eng/downloads" target="_blank" rel="nofollow">Microsoft Visual Studio</a>. It gets installed automatically on your machine.</p>\n' +
                    '<p>Note: You need an active internet connection for installing the express edition.</p>',
                video: 'https://www.youtube.com/embed/udoMi4mGYYw'
            },
            {
                chapterID: 2,
                title: 'Variables',
                unitID: 1,
                video:'https://www.youtube.com/embed/udoMi4mGYYw',
                content: 'A variable is nothing but a name given to a storage area that our programs can manipulate. Each variable in C# has a specific type, which determines the size and layout of the variable\'s memory the range of values that can be stored within that memory and the set of operations that can be applied to the variable.\n' +
                    '\n' +
                    'The basic value types provided in C# can be categorized as −\n' +
                    '\n' +
                    'Type\tExample\n' +
                    'Integral types\tsbyte, byte, short, ushort, int, uint, long, ulong, and char\n' +
                    'Floating point types\tfloat and double\n' +
                    'Decimal types\tdecimal\n' +
                    'Boolean types\ttrue or false values, as assigned\n' +
                    'Nullable types\tNullable data types\n' +
                    'C# also allows defining other value types of variable such as enum and reference types of variables such as class, which we will cover in subsequent chapters.'
    },
            {
                chapterID: 3,
                title: 'Pointers',
                unitID: 1,
                video:'https://www.youtube.com/embed/udoMi4mGYYw',
                content: 'Pointer Type\n' +
                    'Pointer type variables store the memory address of another type. Pointers in C# have the same capabilities as the pointers in C or C++.\n' +
                    '\n' +
                    'Syntax for declaring a pointer type is −\n' +
                    '\n' +
                    'type* identifier;\n' +
                    'For example,\n' +
                    '\n' +
                    'char* cptr;\n' +
                    'int* iptr;\n' +
                    'We will discuss pointer types in the chapter \'Unsafe Codes\'.'
            },
            {   chapterID: 4,
                title: 'Operators',
                unitID: 1,
                video:'https://www.youtube.com/embed/udoMi4mGYYw',
                content: 'Arithmetic Operators\n' +
                    'Following table shows all the arithmetic operators supported by C#. Assume variable A holds 10 and variable B holds 20 then −\n' +
                    '\n' +
                    'Show Examples\n' +
                    '\n' +
                    'Operator\tDescription\tExample\n' +
                    '+\tAdds two operands\tA + B = 30\n' +
                    '-\tSubtracts second operand from the first\tA - B = -10\n' +
                    '*\tMultiplies both operands\tA * B = 200\n' +
                    '/\tDivides numerator by de-numerator\tB / A = 2\n' +
                    '%\tModulus Operator and remainder of after an integer division\tB % A = 0\n' +
                    '++\tIncrement operator increases integer value by one\tA++ = 11\n' +
                    '--\tDecrement operator decreases integer value by one\tA-- = 9\n' +
                    'Relational Operators'

            }



        ]
    },
    getQuestions() {
        return [
            {
                questionID: 0,
                title: 'question 1',
                description: 'what is c#',
                option1: 'a framework',
                option2: 'a slung for people who cannot see sharp',
                option3: 'a fancy spaceship made by microsoft',
                option4: 'programming language',
                correctAnswer: 4,
                chapterID: 0
            },
            {
                questionID: 1,
                title: 'question 2',
                description: 'what is Monodevelop?',
                option1: 'a framework',
                option2: 'a slung for people who cannot see sharp',
                option3: 'a fancy spaceship made by microsoft',
                option4: 'an IDE for writing code stuff ',
                chapterID: 0,
                correctAnswer: 4,

            },
            {
                questionID: 2,
                title: 'question 3',
                description: 'What are you?',
                option1: 'a dinosaur escaped from a google chrome',
                option2: 'a framework',
                option3: 'a fancy spaceship made by microsoft',
                option4: 'i am a noob hooman.',
                chapterID: 0,
                correctAnswer: 4,


            },
            {
                questionID: 3,
                title: 'question 4',
                description: 'What are you?',
                option1: 'a dinosaur escaped from a google chrome',
                option2: 'a framework',
                option3: 'a fancy spaceship made by microsoft',
                option4: 'i am a noob hooman.',
                chapterID: 0,
                correctAnswer: 4,
            },{
                questionID: 4,
                title: 'question 5',
                description: 'What are you?',
                option1: 'a dinosaur escaped from a google chrome',
                option2: 'a framework',
                option3: 'a fancy spaceship made by microsoft',
                option4: 'i am a noob hooman.',
                chapterID: 1,
                correctAnswer: 4,


            },
            {
                questionID: 5,
                title: 'question 6',
                description: 'What are you?',
                option1: 'a dinosaur escaped from a google chrome',
                option2: 'a framework',
                option3: 'a fancy spaceship made by microsoft',
                option4: 'i am a noob hooman.',
                chapterID: 1,
                correctAnswer: 4,
            },
            {
                questionID: 6,
                title: 'question 7',
                description: 'What are you?',
                option1: 'a dinosaur escaped from a google chrome',
                option2: 'a framework',
                option3: 'a fancy spaceship made by microsoft',
                option4: 'i am a noob hooman.',
                chapterID: 1,
                correctAnswer: 4,
            },
            {
                questionID: 7,
                title: 'question 8',
                description: 'What are you?',
                option1: 'a dinosaur escaped from a google chrome',
                option2: 'a framework',
                option3: 'a fancy spaceship made by microsoft',
                option4: 'i am a noob hooman.',
                chapterID: 1,
                correctAnswer: 4,
            },
            {
                questionID: 8,
                title: 'question 9',
                description: 'What are you?',
                option1: 'a dinosaur escaped from a google chrome',
                option2: 'a framework',
                option3: 'a fancy spaceship made by microsoft',
                option4: 'i am a noob hooman.',
                chapterID: 1,
                correctAnswer: 4,
            },
            {
                questionID: 9,
                title: 'question 10',
                description: 'What are you?',
                option1: 'a dinosaur escaped from a google chrome',
                option2: 'a framework',
                option3: 'a fancy spaceship made by microsoft',
                option4: 'i am a noob hooman.',
                chapterID: 1,
                correctAnswer: 4,
            },
            {
                questionID: 10,
                title: 'What is variable ',
                description: 'What is variable ',
                option1: 'we store temporary things on it',
                option2: 'a framework',
                option3: 'a fancy spaceship made by microsoft',
                option4: 'a cat',
                chapterID: 2,
                correctAnswer: 4,
            },     {
                questionID: 11,
                title: 'Could an int type  hold decimals',
                description: 'Could an integer have decimals',
                option1: 'yes',
                option2: 'no',
                option3: 'it depends',
                option4: 'there is nothing such as int ',
                chapterID: 2,
                correctAnswer: 2,
            },     {
                questionID: 11,
                title: 'Could an string type  hold decimals ',
                description: '',
                option1: 'yes',
                option2: 'no',
                option3: 'it depends',
                option4: 'there is nothing such as string ',
                chapterID: 2,
                correctAnswer: 2,
            },
            {
                questionID: 12,
                title: 'pointers 2',
                description: 'what does a pointer do?',
                option1: 'it point stuff',
                option2: 'it point things in memory',
                option3: 'it is a sign',
                option4: 'it only exists in c++',
                chapterID: 3,
                correctAnswer: 2,
            },
            {
                questionID: 13,
                title: 'operators 1',
                description: 'what does an operator do?',
                option1: 'it makes food',
                option2: 'it point things in memory',
                option3: 'it is a sign',
                option4: 'it makes operations on datatypes',
                chapterID: 4,
                correctAnswer: 4,
            },  {
                questionID: 14,
                title: 'operators plus',
                description: 'what does an "+" operator do?',
                option1: 'it makes food',
                option2: 'it point things in memory',
                option3: 'it is a sign',
                option4: 'performs addition between numbers',
                chapterID: 4,
                correctAnswer: 4,
            },
            {
                questionID: 15,
                title: 'operators plus',
                description: 'what does an "+" operator also do?',
                option1: 'it makes food',
                option2: 'it point things in memory',
                option3: 'it is a sign',
                option4: 'concats strings',
                chapterID: 4,
                correctAnswer: 4,
            },
            {
                questionID: 16,
                title: 'operators minus',
                description: 'what does an "-" operator  do?',
                option1: 'it makes food',
                option2: 'it point things in memory',
                option3: 'it is a sign',
                option4: 'substracts numbers',
                chapterID: 4,
                correctAnswer: 4,
            },{
                questionID: 17,
                title: 'operators multiply',
                description: 'what does an "*" operator  do?',
                option1: 'it makes food',
                option2: 'it point things in memory',
                option3: 'it is a sign',
                option4: 'multiplies numbers',
                chapterID: 4,
                correctAnswer: 4,
            },
            {
                questionID: 18,
                title: 'operators %',
                description: 'what does an "%" operator  do?',
                option1: 'it makes food',
                option2: 'it point things in memory',
                option3: 'it is a sign',
                option4: 'makes modulo of numbers',
                chapterID: 4,
                correctAnswer: 4,
            },
            {
                questionID: 19,
                title: 'operators /',
                description: 'what does an "/" operator  do?',
                option1: 'it makes food',
                option2: 'it point things in memory',
                option3: 'it is a sign',
                option4: 'divides numbers',
                chapterID: 4,
                correctAnswer: 4,
            },
            {
                questionID: 20,
                title: 'operators ^',
                description: 'check the correct answer',
                option1: 'all is correct',
                option2: 'none is correct',
                option3: '2^4 = 8',
                option4: '2^3=8',
                chapterID: 4,
                correctAnswer: 4,
            },





        ]
    },

    getAnswers() {
        return []
    },
    getUsers() {
        return [
            {
                userID: 0,
                firstname: 'Dimitris',
                lastname: 'Tzilivakis',
                role: 2,
                username: 'screwdycrow'

            }
        ]
    }

}


