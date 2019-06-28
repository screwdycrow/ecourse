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
                chapters: []
            }, {
                unitID: 2,
                title: 'OOP principles in c#',
                description: 'In this unit we will see how to use classes and objects',
                chapters: []
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

        ]
    },
    getQuestions() {
        return [
            {
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
                title: 'question 2',
                description: 'what is Monodevelop?',
                option1: 'a framework',
                option2: 'a slung for people who cannot see sharp',
                option3: 'a fancy spaceship made by microsoft',
                option4: 'an IDE for writing code stuff ',
                chapterID: 0
            },
            {
                title: 'question 3',
                description: 'What are you?',
                option1: 'a dinosaur escaped from a google chrome',
                option2: 'a framework',
                option3: 'a fancy spaceship made by microsoft',
                option4: 'i am a noob hooman.',
                chapterID: 0
            }
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


