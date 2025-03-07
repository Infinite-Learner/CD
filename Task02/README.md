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
>File_name : **task02.html**(Skeleton of Website.)
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/style.css">
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
>2.File_name : **style.css**(Presentation of Skeleton.)
```
    body{
    box-sizing: border-box;
}
.border-box
{ 
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
.content-box
{
    background: #8cb6c0;
    padding: 5px;
    margin:5% 10% 5% 20%;
    border:black 1px solid
}
```

## Result: 
The task is successfully completed and Implemented successfully.
![out](/Task02/img/result.png)

Done! &#128522;
