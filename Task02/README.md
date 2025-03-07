># To develop a box-model using HTML.
>> **The model need to develop.**
>>>![To_DO](/Task02/img/to_do.png)
>>>
```
Rules : 
        1.Try you develop using standard like 
            ->Naming Conventions(Class and Id)
            ->Follow DOM hierarchy.
        2.Style using CSS without using Height and Width.       
```
## Lets Implement this : 
***Approach 1  : Using Margin and Padding***
>File_name : **task02_app_1.html**(Skeleton of Website.)
```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="./css/style_1.css">
    </head>
    <body>
        <div class="border-box">
            Crystal Delta Solutions.
            <div class="margin-box">
                Intern Training - 2K25
                <div class="padding-box">
                    Mentor : Devanand
                    <div class="content-box">
                        CD-Interns - 2025
                    </div>
                </div>
            </div>
        </div>
    </body>
    </html>
```
>2.File_name : **style_1.css**(Presentation of Skeleton.)
```
    body{
        box-sizing: border-box;
    }
    .border-box{   
        margin: 20px 100px 20px 100px;
        padding:5%;
        background: #f9cc9d;
        border:black dotted 1px;
    }
    .margin-box{
        padding: 5%;
        border: black 1px dotted;
        background: #fddd9b;
    }
    .padding-box{   
        padding:5%;
        background:#c3d08b;
        border:black solid 1px;
    }
    .content-box{
        background: #8cb6c0;
        padding: 5px;
        margin:5% 10% 5% 20%;
        border:black 1px solid
    }
```

## Result: 
The task is successfully completed and Implemented successfully.
![out](/Task02/img/result_app_1.png)

Done! : &#128522;

***Approach 2  : Using Position with Margin and Padding***
>File_name : **task02_app_2.html**(Skeleton of Website.)
```
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Illustration of Box Model</title>
        <link rel="stylesheet" href="./css/style_2.css">
    </head>

    <body>
        <div class="box-model">
            <div class="border-box">
                <h4>Crystal Delta Solutions</h4>
            </div>
            <div class="margin-box">
                <h4>Intern 2025</h4>
            </div>
            <div class="padding-box">
                <h4>Mentor : Devanand</h4>
            </div>
            <div class="content-box">
                <h4>CD Interns</h4>
            </div>
        </div>
    </body>

    </html>
```
>2.File_name : **style_2.css**(Presentation of Skeleton.)
```
    body{
        box-sizing: border-box;
    }
    .box-model{
        background-color: aliceblue;
        position: relative;
        top:50px;
        left:25%;
    }
    .border-box{
        background-color: #f9cc9d;
        position: absolute;
        border: dashed black 0.5px;
        padding: 120px 280px;
    }
    .margin-box{
        background-color: #fddd9b;
        position: absolute;
        border:solid black 1px;
        padding: 90px 210px;
        left: 70px;
        top:30px;
    }
    .padding-box{
        background-color: #c3d08b;
        position: absolute;
        padding: 60px 140px;
        border: dashed black 0.5px;
        top: 60px;
        left:140px;
    }
    .content-box{
        background-color: #8cb6c0;
        position:absolute;
        border: solid black 1px;
        padding: 30px 70px;
        top:90px;
        left: 210px;
    }
    h4{
        position: absolute;
        top:-10px;
        left:20px;
        color:black;
    }
    .content-box h4{
        position: absolute;
    top: 0px;
    left:30px
    }

```

## Result: 
The task is successfully completed and Implemented successfully.
![out](/Task02/img/result_app_2.png)

***Approach 2*** is done! : &#128526;