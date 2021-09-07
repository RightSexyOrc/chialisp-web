(self.webpackChunkchialisp_web=self.webpackChunkchialisp_web||[]).push([[586],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=r,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return t?a.createElement(h,o(o({ref:n},c),{},{components:t})):a.createElement(h,o({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9944:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var a=t(2122),r=t(9756),i=(t(7294),t(3905)),o=["components"],l={id:"high_level_lang",title:"4 - The High Level Language, Compiler, and Functions"},s=void 0,u={unversionedId:"high_level_lang",id:"high_level_lang",isDocsHomePage:!1,title:"4 - The High Level Language, Compiler, and Functions",description:"This guide assumes that you have already read the previous parts.",source:"@site/docs/high_level_lang.md",sourceDirName:".",slug:"/high_level_lang",permalink:"/docs/high_level_lang",editUrl:"https://github.com/Chia-Network/chialisp-web/edit/main/docs/high_level_lang.md",version:"current",frontMatter:{id:"high_level_lang",title:"4 - The High Level Language, Compiler, and Functions"},sidebar:"someSidebar",previous:{title:"3 - Deeper into CLVM",permalink:"/docs/deeper_into_clvm"},next:{title:"5 - Common Functions in Chialisp",permalink:"/docs/common_functions"}},c=[{value:"Run",id:"run",children:[]},{value:"list",id:"list",children:[]},{value:"if",id:"if",children:[]},{value:"qq unquote",id:"qq-unquote",children:[]},{value:"Compiling to CLVM with Mod",id:"compiling-to-clvm-with-mod",children:[]},{value:"Functions, Macros and Constants",id:"functions-macros-and-constants",children:[]},{value:"Factorial",id:"factorial",children:[]},{value:"Squaring a List",id:"squaring-a-list",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],p={toc:c};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide assumes that you have already read the previous parts.\nIt is highly recommended that you do so as the higher level language is built directly on top of the lower level language."),(0,i.kt)("h2",{id:"run"},"Run"),(0,i.kt)("p",null,"The first difference you need to be aware of for the higher level language is that you should call ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"brun"),".\nThis lets the runtime know that it should be including higher level features."),(0,i.kt)("p",null,"The first higher level feature you should be aware of is that ",(0,i.kt)("strong",{parentName:"p"},"it is no longer necessary to quote atoms!")),(0,i.kt)("p",null,"Compare ",(0,i.kt)("inlineCode",{parentName:"p"},"brun")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," here:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"$ brun '(+ 200 200)'\nFAIL: first of non-cons ()\n$ run '(+ 200 200)'\n400\n")),(0,i.kt)("p",null,"Run also gives us access to a number of convenient high level operators, which we will cover now."),(0,i.kt)("h2",{id:"list"},"list"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"list")," takes any number of parameters and returns them put inside a list.\nThis saves us from having to manually create nested ",(0,i.kt)("inlineCode",{parentName:"p"},"(c (A) (c (B) (q ())))")," calls, which can get messy quickly."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},'$ run \'(list 100 "test" 0xdeadbeef)\'\n(100 "test" 0xdeadbeef)\n')),(0,i.kt)("h2",{id:"if"},"if"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"if")," automatically puts our ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," statement into the lazy evaluation form so we do not need to worry about the unused code path being evaluated."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"$ run '(if 1 (q . \"success\") (x))' '(100)'\n\"success\"\n\n$ run '(if 0 (q . \"success\") (x))' '(100)'\nFAIL: clvm raise ()\n")),(0,i.kt)("h2",{id:"qq-unquote"},"qq unquote"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"qq")," allows us to quote something with selected portions being evaluated inside by using ",(0,i.kt)("inlineCode",{parentName:"p"},"unquote"),".\nThe advantages of this may not be immediately obvious but are extremely useful in practice as it allows us to substitute out sections of predetermined code."),(0,i.kt)("p",null,"Suppose we are writing a program that returns another coin's puzzle.\nWe know that a puzzle takes the form: ",(0,i.kt)("inlineCode",{parentName:"p"},"(c (c (q . 50) (c (q . 0xpubkey) (c (sha256 2) (q . ())))) (a 5 11))"),"\nHowever we will want to change 0xpubkey to a value passed to us through our solution."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note: ",(0,i.kt)("inlineCode",{parentName:"strong"},"@")," allows us to access the arguments in the higher level language (",(0,i.kt)("inlineCode",{parentName:"strong"},"@")," == 1)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"$ run '(qq (c (c (q . 50) (c (q (unquote (f @))) (c (sha256 2) ()))) (a 5 11)))' '(0xdeadbeef)'\n\n(c (c (q . 50) (c (q . 0xdeadbeef) (c (sha256 2) ()))) (a 5 11))\n")),(0,i.kt)("h2",{id:"compiling-to-clvm-with-mod"},"Compiling to CLVM with Mod"),(0,i.kt)("p",null,"It is important to remember that in practice smart coins will run using the lower level language, so none of the above operators will work on the network.\nWhat we ",(0,i.kt)("em",{parentName:"p"},"can")," do however is compile them down to the lower level language.\nThis is where ",(0,i.kt)("inlineCode",{parentName:"p"},"mod")," comes in.\n",(0,i.kt)("inlineCode",{parentName:"p"},"mod")," is an operator that lets the runtime know that it needs to be compiling the code rather than actually running it."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"(mod A B)")," takes two or more parameters. The first is used to name parameters that are passed in, and the last is the higher level script which is to be compiled."),(0,i.kt)("p",null,"Below we name our arguments ",(0,i.kt)("inlineCode",{parentName:"p"},"arg_one")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"arg_two")," and then access ",(0,i.kt)("inlineCode",{parentName:"p"},"arg_one")," inside our main program"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"$ run '(mod (arg_one arg_two) (list arg_one))'\n(c 2 ())\n")),(0,i.kt)("p",null,"As you can see it returns our program in compiled lower level form."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"$ brun '(c 2 ())' '(100 200 300)'\n(100)\n")),(0,i.kt)("p",null,"You may be wondering what other parameters ",(0,i.kt)("inlineCode",{parentName:"p"},"mod")," takes, between variable names and source code."),(0,i.kt)("h2",{id:"functions-macros-and-constants"},"Functions, Macros and Constants"),(0,i.kt)("p",null,"In the higher level language we can define functions, macros, and constants before our program by using ",(0,i.kt)("inlineCode",{parentName:"p"},"defun"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"defun-inline"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"defmacro")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"defconstant"),"."),(0,i.kt)("p",null,"We can define as many of these as we like before the main source code.\nUsually a program will be structured like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"(mod (arg_one arg_two)\n  (defconstant const_name value)\n  (defun function_name (parameter_one parameter_two) *function_code*)\n  (defun another_function (param_one param_two param_three) *function_code*)\n  (defun-inline utility_function (param_one param_two) *function_code*)\n  (defmacro macro_name (param_one param_two) *macro_code*)\n\n  (main *program*)\n)\n")),(0,i.kt)("p",null,"A few things to note:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Functions can reference themselves in their code but macros and inlines cannot as they are inserted at compile time."),(0,i.kt)("li",{parentName:"ul"},"Both functions and macros can reference other functions, macros and constants."),(0,i.kt)("li",{parentName:"ul"},"Macros that refer to their parameters must be quasiquoted with the parameters unquoted"),(0,i.kt)("li",{parentName:"ul"},"Be careful of infinite loops in macros that reference other macros."),(0,i.kt)("li",{parentName:"ul"},"Comments can be written with semicolons"),(0,i.kt)("li",{parentName:"ul"},"Inline functions are generally more cost effective than regular functions except when reusing calculated arguments: ",(0,i.kt)("inlineCode",{parentName:"li"},"(defun-inline foo (X) (+ X X)) (foo (* 200 300))")," will perform the expensive multiplication twice")),(0,i.kt)("h2",{id:"factorial"},"Factorial"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"(mod (arg_one)\n  ; function definitions\n  (defun factorial (input)\n    (if (= input 1) 1 (* (factorial (- input 1)) input))\n  )\n\n  ; main\n  (factorial arg_one)\n)\n")),(0,i.kt)("p",null,"We can save these files to .clvm files which can be run from the command line.\nSaving the above example as ",(0,i.kt)("inlineCode",{parentName:"p"},"factorial.clvm")," allows us to do the following."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"$ run factorial.clvm\n(a (q 2 2 (c 2 (c 5 ()))) (c (q 2 (i (= 5 (q . 1)) (q 1 . 1) (q 18 (a 2 (c 2 (c (- 5 (q . 1)) ()))) 5)) 1) 1))\n\n$ brun '(a (q 2 2 (c 2 (c 5 ()))) (c (q 2 (i (= 5 (q . 1)) (q 1 . 1) (q 18 (a 2 (c 2 (c (- 5 (q . 1)) ()))) 5)) 1) 1))' '(5)'\n120\n")),(0,i.kt)("h2",{id:"squaring-a-list"},"Squaring a List"),(0,i.kt)("p",null,"Now lets do an example which uses macros as well.\nWhen writing a macro it must be quasiquoted with the parameters being unquoted."),(0,i.kt)("p",null,"We can also take this time to show another feature of the compiler.\nYou can name each parameter in a list or you can name the list itself.\nThis works at any place where you name parameters, and allows you to handle lists where you aren't sure of the size."),(0,i.kt)("p",null,"Here we define a macro to square a parameter and then a function to square a list."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"(mod (args)\n\n  (defmacro square (input)\n    (qq (* (unquote input) (unquote input)))\n  )\n\n  (defun sqre_list (my_list)\n    (if my_list\n      (c (square (f my_list)) (sqre_list (r my_list)))\n      my_list\n    )\n  )\n\n  (sqre_list args)\n)\n")),(0,i.kt)("p",null,"Compiling and running this code results in this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-chialisp"},"$ run square_list.clvm\n(a (q 2 2 (c 2 (c 5 ()))) (c (q 2 (i 5 (q 4 (* 9 9) (a 2 (c 2 (c 13 ())))) (q . 5)) 1) 1))\n\n$ brun '(a (q 2 2 (c 2 (c 5 ()))) (c (q 2 (i 5 (q 4 (* 9 9) (a 2 (c 2 (c 13 ())))) (q . 5)) 1) 1))' '((10 9 8 7))'\n(100 81 64 49)\n")),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"You should now have the context and knowledge needed to write your own Chialisp programs.\nRemember from ",(0,i.kt)("a",{parentName:"p",href:"/docs/coins_spends_and_wallets/"},"our discussion of coins")," that these programs run on the blockchain and instruct the blockchain what to do with the coin's value."),(0,i.kt)("p",null,"If you have further questions feel free to ask on ",(0,i.kt)("a",{parentName:"p",href:"https://keybase.io/team/chia_network.public"},"Keybase"),"."))}m.isMDXComponent=!0}}]);