# finalexam-questioncollector-js

At the end of studies in general medicine, dentistry, and pharmacology in Hungary, a written national "final exam" must be taken. This is a multiple choice question-based exam, and the questions are provided to the students ahead of time at the website finalexam.hu. However, on the website the questions are displayed 20 at a time, and at the time of writing (april 2022) there are 4575 questions. Having the questions in a text-based format allows for printing and easier creation of flashcards, etc.

This short javascript snippet takes each page of 20 questions, copies the question stem, answer, and explanation for each question, and creates a blob textfile from which the questions can be copy pasted into a document. It's probably trivial for someone with more programming experience than me to further modify the script to automate the process further, for example so that it iterates through every page automatically.

# Usage

1. Log into finalexam.hu (creating a user is free and does not require proving student status)
2. Open the question list and navigate to one of the pages with questions.
3. Copy paste the script into the console (right click -> inspect -> console (in chromium-based browsers) and execute it
4. A new tab will open with the questions from that page. Copy and paste them to a separate document (and add a newline (press enter))
5. Navigate to the next page with questions. Rerun the script (arrow up + enter reruns the previous command)
6. Repeat until finished
