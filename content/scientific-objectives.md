---
title: "Scientific Objectives"
date: 2022-12-11T16:05:46Z
draft: false 
---

# Scientific Objectives

We present the main scientific contributions achieved by the research group and the research topics relevant to the RoboCup@Home competitions and outline how they will contribute and be further developed in this context.

## Human-Robot Interaction

When social robots are deployed in public environments their ability of initiating and sustaining interactions with users is of vital importance. In a previous long-term deployment of an autonomous robot in a public museum, **\[DelDuchetto-ROMAN19\]** it is reported how the engagement of users quickly decreases over time for long and non-interactive tasks. Therefore, with the goal of obtainig a better sense of the users state during interactions, in **\[DelDuchetto-FROBAI\]** a regression model is trained to assess users' engagement in real-time from the robot point of view. 

To maintain engaging interactions with its users, robots need to adapt in real-time to different changing users state and behaviour. In this direction **\[DelDuchetto-RAL22\]** proposes an adaptation framework where a robot deployed in long-term scenarios learns from first-hand experience during interactions what is the best action to perform at each moment during an interaction based on the engagement state of the users. This method has proven to increase the time users spend interacting with the robot.

## Navigation and Localisation

Human inhabitated environments like homes, museums and shopping malls are challenging scenarios to navigate in for mobile robots. 

In **\[DelDuchetto-RAL18\]** a method is proposed to learn to detect and recover from navigation failures using the help that the robot receives from nearby humans. The proposed approach enables the robot to automatically generate recovery trajectories in future failures, improving the autonomy of the robot navigation in long-term scenarios. 

## Robot Vision


### References
- **\[DelDuchetto-RAL18\]** F. Del Duchetto, A. Kucukyilmaz, L. Iocchi and M. Hanheide, **"Do Not Make the Same Mistakes Again and Again: Learning Local Recovery Policies for Navigation From Human Demonstrations,"** in IEEE Robotics and Automation Letters, vol. 3, no. 4, pp. 4084-4091, Oct. 2018, doi: [10.1109/LRA.2018.2861080](https://doi.org/10.1109/LRA.2018.2861080).
- **\[DelDuchetto-ROMAN19\]** F. Del Duchetto, P. Baxter and M. Hanheide, **"Lindsey the Tour Guide Robot - Usage Patterns in a Museum Long-Term Deployment,"** 2019 28th IEEE International Conference on Robot and Human Interactive Communication (RO-MAN), New Delhi, India, 2019, pp. 1-8, doi: [10.1109/RO-MAN46459.2019.8956329](https://doi.org/10.1109/RO-MAN46459.2019.8956329).
- **\[DelDuchetto-FROBAI20\]**  Del Duchetto F, Baxter P and Hanheide M (2020) **Are You Still With Me? Continuous Engagement Assessment From a Robot's Point of View.** Frontiers in Robotics and AI 7:116. doi: [10.3389/frobt.2020.00116](https://doi.org/10.3389/frobt.2020.00116)
- **\[DelDuchetto-RAL22\]** F. Del Duchetto and M. Hanheide, **"Learning on the Job: Long-Term Behavioural Adaptation in Human-Robot Interactions,"** in IEEE Robotics and Automation Letters, vol. 7, no. 3, pp. 6934-6941, July 2022, doi: [10.1109/LRA.2022.3178807](https://doi.org/10.1109/LRA.2022.3178807).