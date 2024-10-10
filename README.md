# Web Development Project 3 - Flashcard Mastery App

Submitted by: **Xin Zheng**

This web app: **is a flashcard learning tool that allows users to guess answers based on displayed questions. Users can track their streaks of correct answers and mark cards they've mastered. The app includes a shuffle feature to randomize the order of the cards for enhanced learning.**

Time spent: **10** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The user can enter their guess in a box before seeing the flipside of the card**
- [X] **Clicking on a submit button shows visual feedback about whether the answer was correct or incorrect**
- [X] **A back button is displayed on the card and can be used to return to the previous card in a set sequence**
- [X] **A next button is displayed on the card and can be used to navigate to the next card in a set sequence**

The following **optional** features are implemented:

- [X] A shuffle button is used to randomize the order of the cards
- [X] A user's answer may be counted as correct even when it is slightly different from the target answer
- [X] A counter displays the user's current and longest streak of correct responses
- [X] A user can mark a card that they have mastered and have it removed from the pool of answers as well as added to a list of mastered cards

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ScreenToGif 
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes
Challenges encountered:

1. **State Management Complexity**: Managing multiple state variables, such as the current card index, whether a card is flipped, and the user’s answer, became quite complex as new features were added. It required careful use of the `useState()` hook to ensure that all state updates were synchronized correctly.

2. **User Input Handling**: Allowing for slight variations in user answers required implementing logic that could accept similar responses without being overly strict. This was challenging because determining how lenient or strict the comparison should be can greatly affect user experience.

3. **UI Feedback**: Providing immediate visual feedback on whether the user's answer was correct or incorrect was tricky, especially while ensuring that the app’s design remained clean and intuitive. Handling the timing of state changes for showing feedback before automatically moving to the next card required thoughtful coordination.

4. **Shuffling Cards Without Repetition**: Implementing the shuffle functionality while maintaining a proper sequence of cards without repetition took some effort. Ensuring that each card is displayed exactly once until the list is exhausted required adjustments to the state logic.

5. **Tracking the Longest Streak**: Keeping track of the user's current and longest streak of correct responses involved designing a reliable way to count and reset streaks based on user interactions. Making sure the counters were accurate and updating at the right times added complexity to the implementation.

6. **Card Mastery Logic**: Allowing users to mark cards as mastered and remove them from the active pool while keeping a separate list of mastered cards added another layer of logic. It was important to ensure that this feature didn't interfere with the sequence and randomization of the remaining cards.


## License

    Copyright [2024] [Xin Zheng]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
