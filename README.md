This is a single page portal made for New Generation Highschool using Next.js, TypeScript, and Tailwind CSS.

Find our deployed website here -> https://assingment2-webdev-cla1.vercel.app/

Our Group Members: Ashley Hearn, Camille Tsui, Zamira Jordan

What each member built:
Zamira (Member A) - app/layout.tsx, Navbar, Footer, Stats Panel, and the overall look of the page.
Camille (Member B) - data/students.ts, StudentList, and StudentCard.
Ashley (Member C) - StudentPortal, (the state, Remove, Clear all, and the search filter), SearchBox, and AddStudent.

**TEST CHECKLIST**
What to do and || the result: PASS or FAIL.
1.	Open the app.	Every student from your data file shows, and the three numbers match your data. ||  RESULT: PASS
2.	Click Show details on one card, then click it again. That card shows the average (and Honour roll if it is 80 or more) and the button reads Hide details. No other card opens. The second click closes it. || RESULT: PASS
3.	Remove a grade 12 student.	The student is gone, and both Students and Graduating drop by one. || RESULT: PASS
4.	Type a last name in capitals, such as AHMED, into the search box. Then empty the box. Only the matching student shows. When the box is empty, every student is back. || RESULT: PASS
5.	Search for zzz.	The no-students message shows. The three numbers do not change: search changes what is shown, not the list. || RESULT: PASS
6.	Leave the first name empty, fill in the last name, and click Add student. Nothing is added. || RESULT: PASS
7.	Fill in all four inputs and click Add student. The student appears, the numbers update, both name inputs are empty, grade shows 9 and average shows 70. || RESULT: PASS
8.	Click Clear all. The no-students message shows, and all three numbers are 0. || RESULT: PASS
9.	Narrow the browser to phone width (DevTools device toolbar). The cards stack in one column, and nothing scrolls sideways. || RESULT: PASS
10.	Click each link in the navbar.	The page jumps to that section. || RESULT: PASS




