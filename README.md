# Task 1 :  Git Training and Hands-on
This repository is developed to illustrate the ***git*** and its ***commands*** with a hand-on experience.

>## **Git Basic Commands**
>
>>**1.Clone**
>>> To clone(copy of) files in distributed server to local machine(**github**->**System**).
>>> **Syntax**
>>>>--> **git clone \<repo-url\>**
>>>- **Note :** clone can be achieved using HTTPs || SSH method.
>>>>
>>> **Example**
>>>>- \>**git clone "https://github.com/Infinite-Learner/CD.git"** # **https** method.
>>>>- \>[**git clone git@github.com:Infinite-Learner/CD.git**]("git@github.com:Infinite-Learner/CD.git")  # **SSH** method.
>>>>
>>>**Note** - \`Before using SSH need to do somethings : refer url [**SSH**](https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/GitHub-SSH-Key-Setup-Config-Ubuntu-Linux)
>>>>---------
>>> **Illustration #1**
>>>>Repository I'm going to clone below repository
>![IMG](/Input_Images/repo.png)
git **clone** comamnd is entered : 
>![IMG](/Outputs/clone.png)
**Result :**
![IMG](/Outputs/clone_out.png)
>>>git **clone** command done successfully.
>
>>**2.Status**
>>
>>> **Syntax**
>>>>--> **git status**
>>>- **Note :** To check the modified files.(compares remote repo files and local files(**unstaged**)).
>>>>---
>>> **Example**
>>> **Illustration #2**
>>>>I modified README.md files so it changed 'M'.
Now, execute command
>>>\> **git status** 
![IMG](/Outputs/status.png)
>>>git **status** command done successfully.
>
>>**3.Add**
>>
>>> **Syntax**
>>>>--> **git add \<filename>.\<fileextension>**
>>>- **Note :** To shift a unstaged files(modified files) to a **copy repository(local)**.[***unstaged-->staged***].
>>>>---
>>> **Example**
>>> **Illustration #3**
>>>>I'll going to take the previous example(Illustration #2)
![add_before](/Input_Images/status.png)
here, **modified : README.md** is our targeted file to move stage area.let's do further
>>>\> **git add README.md** 
![IMG](/Outputs/add.png)
here you can see our target filed moved to stage area means ready to **commit**.
 **git **add** command done successfully.**
>>>>
>>>>**Note** : **git add .** perform move all files to stage area.
>>>>
>>**4.Commit**
>>
>>> **Syntax**
>>>>--> **git commit -m "{commit message}"**
>>>- **Note :** Commit is the process of confirming the staged file, which is ready to modify the original (**server repository**). **IMPORTANT: A commit message** is necessary to perform a commit. If not, an error will occur.".
>>>>---
>>> **Example**
>>> **Illustration #4**
>>>>I'll going to take the previous example(Illustration #2)
![commit_before](/Outputs/add.png)
here, **modified : README.md** is our targeted file to confirm its ready to change in (**server repo**).let's do further
>>>\> **git add README.md** 
![IMG](/Outputs/commit.png)
here you can see our target filed moved to stage area means ready to **commit**.
 **git commit command done successfully.**
>>>>
>>>>**Note** : **COMMIT_MSG** is important
>>>>
>>**5.Push**
>>
>>> **Syntax**
>>>>--> **git push origin {branch_name}"**
>>>- **Note : push** command led to replace the original file by modified in mentioned **branch** (**server repository**). **IMPORTANT: git push** set origin as **main** to push as default branch".
>>>>---
>>> **Example**
>>> **Illustration #5**
>>>>I'll going to **push** my updated file.
>>>\> **git push origin feat/task01** 
![IMG](/Outputs/push.png)
here you can see our modified files moved to my branch **feat/task01**.
 **git push command done successfully.**
>>>>
>>**6.Pull**
>>
>>> **Syntax**
>>>>--> **git pull origin {branch_name}"**
>>>- **Note : pull** command led to retrieve a latest updated **branch** (**server repository**)to **work directory**. **IMPORTANT: git pull** replaces an existing files in local machine with updated one".
>>>>---
>>> **Example**
>>> **Illustration #6**
>>>>I'll going to **pull** from my branch **feat/task01**.
>>>\> **git pull origin feat/task01** 
![IMG](/Outputs/pull.png)
here you can see my branch **feat/task01** is already upto date.
 **git pull command done successfully.**
 **Note :** **pull** overwrites the existing if needed. 
>>>>
>>**7.Fetch**
>>
>>> **Syntax**
>>>>--> **git fetch origin {branch_name}"**
>>>- **Note : fetch** command led to retrieve a latest updated **branch** (**server repository**) to **work directory**. **IMPORTANT: *not like git pull git fetch not replace existing files instead it just copies the files to working directory.*** replaces an existing files in local machine with updated one".
>>>>---
>>> **Example**
>>> **Illustration #6**
>>>>I'll going to **fetch** from my branch **main** and **feat/task01**.
>>>\> **git fetch origin feat/task01**
>>>\> **git fetch origin main** 
![IMG](/Outputs/fetch.png)
here you can see my branch **feat/task01** and 
 **git fetch command done successfully.**
 **Note :** **fetch** copies the files to local machine. 
>>>>
>>**7.Fetch**
>>
>>> **Syntax**
>>>>--> **git fetch origin {branch_name}"**
>>>- **Note : fetch** command led to retrieve a latest updated **branch** (**server repository**) to **work directory**. **IMPORTANT: *not like git pull git fetch not replace existing files instead it just copies the files to working directory.*** replaces an existing files in local machine with updated one".
>>>>---
>>> **Example**
>>> **Illustration #7**
>>>>I'll going to **fetch** from my branch **main** and **feat/task01**.
>>>\> **git fetch origin feat/task01**
>>>\> **git fetch origin main** 
![IMG](/Outputs/fetch.png)
here you can see my branch **feat/task01** and 
 **git fetch command done successfully.**
 **Note :** **fetch** copies the files to local machine. 
>>>>
>>**8.Branch**
>>
>>> **Syntax**
>>>>--> **git branch"** => to list branches.
>>>>--> **git branch {branch_name}"** => to create branch.
>>>>--> **git branch --delete {branch_name}"** => to delete branch.
>>>---
>>>**Example**
>>> **Illustration #8**
I'n going to perform **branch** operations.
>>>> \> **git branch"**
To list branches:
![git_branch](/Outputs/branch.png)
>>>>--> **git branch feat/task01_2**
To create branch :
![git_branch_c](/Outputs/branch_create.png)
>>>>--> **git branch --delete feat/task01_2**
To delete branch:
![git_branch_d](/Outputs/branch_delete.png)
**git branch command done successfully.**
>>>>
>>**9.Switch**
>>
>>> **Syntax**
>>>>--> **git switch {branch_name}"**
>>>- **Note : switch** command used to switch between branches. **ensure** all files are committed in current branch before switch other.
>>>>---
>>> **Example**
>>> **Illustration #9**
>>>>I'll going to illustrate **switch**
I'm currently in my **"feat/task01"** to switch **main** branch.
>>>\> **git switch main**
![IMG](/Outputs/switch_branch.png)
here you can see my branch **feat/task01** and 
 **git fetch command done successfully.**
 **Note :** before performing **switch** branch commit all changes made on files i current directory else you encounter this :-
    ![switch_err](/Outputs/switch_err.png)
>>>>
>>**10.Checkout**
>>
>>> **Syntax**
>>>>--> **git checkout {branch_name}"**
>>>- **Note : checkout** command used to copy the existing branch to provide seperate work environment. **ensure** to create new **branch** before **checkout**.
>>>>---
>>> **Example**
>>> **Illustration #10**
>>>>I'll going to illustrate **checkout feat/task01**
>>>\> **git checkout feat/task01**
![IMG](/Outputs/checkout_ex.png)
here you can see my branch **feat/task01** is already exists so it switched.
Now, I illustrate how to checkout new branch. It's quite simple just add **-b** before **branch_name** on previous command.
\>**git checkout -b feat/task01_2** 
![git_check_n](/Outputs/checkout_n.png)
 **git checkout command done successfully.**
 >>>>
>>**9.Switch**
>>
>>> **Syntax**
>>>>--> **git switch {branch_name}"**
>>>- **Note : switch** command used to switch between branches. **ensure** all files are committed in current branch before switch other.
>>>>---
>>> **Example**
>>> **Illustration #9**
>>>>I'll going to illustrate **merge conflicts**
**Scenerio :** A git merge conflict is an event that takes place when Git is unable to automatically resolve differences in code between two commits. Git can merge the changes automatically only if the commits are on different lines or branches.
>>>\> **git branch**
![IMG](/Outputs/fetch.png)
here you can see my branch **feat/task01** and 
 **git fetch command done successfully.**
 **Note :** **fetch** copies the files to local machine. 
 >>>>