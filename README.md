
# Assignment-05: GitHub Issues Tracker

### **API Endpoints:**
###  **All Issues:** 
  - https://phi-lab-server.vercel.app/api/v1/lab/issues

###  **Single Issue:**
   - https://phi-lab-server.vercel.app/api/v1/lab/issue/{id}

   - Example: https://phi-lab-server.vercel.app/api/v1/lab/issue/33


###  **Search Issue:** https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q={searchText}

   - Example:  https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=notifications
---

## 📝 Main Requirements

## 🎨 Design Part

## Login Page
- Create a login page containing a logo, title, and sub-title
- Below that, there will be 2 inputs, a sign-in button, and a demo credential to sign in. Follow the Figma for this page 
- Styled as per Figma

## Main Page: 

### Navbar: 

- Navbar with website logo/name on the left
- Search input and button on the right

### Tab Section like Figma: 

- 3 tab ( All, Open, Closed) at the top of this section.(**All**, **Open**, **Closed**)

- Below the tab, there will be an icon, the issue count, some text on the left, and an open and closed marker on the right

- Responsiveness: The website should be responsive for mobile devices. It is totally up to you.
--- 
## ⚙️ Functionalities
- In login page, there will be default admin credentials (username, password). You need to sign in using these credentials.

- Load all issues and display as per Figma

- On clicking on an open or closed tab, it will load the issues data of the related tab and show it in a display-like card in a 4-column layout like Figma. By default, it will show all data 

- Each card shows:
  - Title
  - Description
  - Status
  - Category
  - Author
  - Priority
  - Label
  - CreatedAt
- Clicking on a tree name in a card will open a modal and show all the information about that Issue. 

### 🚀 Challenges

- Show the card Top border based on their category(open, closed), open card will have Green Boder, closed card will have a purple border on top. 

- Loading spinner on data load

- Show active button on changing category names

- Implement Search Functionality and 8 meaningful github commit.  

- Create a readme file and answer this question on your own. Don’t copy-paste from Google or any AI chatbot.
# Question Answers :: 
    - 1️⃣ What is the difference between var, let, and const?
    # Ans:
     var: Declares variables with function or global scope and allows re-declaration and updates within the same scope.
     example: var num = [1,2,3,]
     var num = [1,8,9] //re-declaration
         num = [3,2,1] // updates
    //**console.log was called before the variable was created.
         
    let: Declares variables with block scope, allowing updates but not re-declaration within the same block.
    example: 
    let x = 10;
    x = 20; // updating is allowed let variable
    let x = 30; // cannot redeclare let and const variable
    const: Declares block-scoped variables that cannot be reassigned after their initial assignment.
    example:
    const x = 10;
    x = 20; // not updating  const variable
    let x = 30; // cannot redeclare const variable

    - 2️⃣ What is the spread operator (...)?
    # Ans:
    spread operator is apply in Denoted by three dots ... before the array/object.
    spread operator :[...array]
    example:
    let arr =[1,2,3,4];
     arr = [...,3,4];
    - 3️⃣ What is the difference between map(), filter(), and forEach()?
    # Ans: map() :---> is return a new array.it purpose to used in a created a new array.original array is not change;
    filter(): is used to purpose is current condition accoding to element to use and its return a new array with the filtered elements ;
    original value is not change;
    forEach(); for each is a loop like for of loop etc and it can not return anything ;

    - 4️⃣ What is an arrow function?
    # Ans; array function is---> like regular function and array function is difference is user array syntax and not write function name for Example:
    normal function is -->
    const function Array (a,b){
     return a+b;
    }
    and array function 
    const array=()=>{
     return a+b;
    }
    - 5️⃣ What are template literals?
     # ans: 
    Template literals are a modern way of writing strings in JavaScript, using backtick ( ) and easily placing variables or expressions inside them.
    -- start  write the backtick ( )
    -- and in the ${variabe}
    -- userd `` backtick
---

## 🔑 Demo Credentials

```text
Username: admin
Password: admin123
```
---

### Optional: 
 - No need to show status: Open, Closed styles On modals. 
 - No Need to show icon on labels 
 - No need to apply styles on Priority 
--- 


## 📤 What to submit

- **GitHub Repository Link:**
- **Live Site Link:**

---


