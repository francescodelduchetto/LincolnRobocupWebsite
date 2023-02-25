---
title: "Scientific Objectives"
date: 2022-12-11T16:05:46Z
draft: false 
---

# Scientific Objectives

We present the main scientific contributions achieved by the research group and the research topics relevant to the RoboCup@Home competitions and outline how they will contribute and be further developed in this context.

## Planning and plan execution
The deployment of robots in populated environments interacting with non-expert users requires facing many sources of uncertainty during task execution such as incomplete information about the environment or unpredictable behaviours coming from humans. Planning and plan execution under such uncertainties is also an important problem to be addressed within the RoboCup@Home competition and, in this context, we have recent research results.

In **\[Polvara-RAL21\]**, we propose Next-Best-Sense (NBS), a decision-making framework that allows a mobile robot to explore an environment looking for objects while combining multiple criteria in a single utility function. Modelled following the traditional sense-plan-act paradigm, NBS iteratively select a new robot pose in order to efficiently explore an environment while carrying out a survey task. We further extend NBS in **\[Polvara-RAL22\]**, where we propose a topological formulation of a particle filter for tracking multiple fruit harvesters in a polytunnel scenario, by integrating 2D LiDARs, RFID, and GPS readings.

## Human-Robot Interaction

When social robots are deployed in public environments their ability of initiating and sustaining interactions with users is of vital importance. In a previous long-term deployment of an autonomous robot in a public museum, **\[DelDuchetto-ROMAN19\]** it is reported how the engagement of users quickly decreases over time for long and non-interactive tasks. Therefore, with the goal of obtainig a better sense of the users state during interactions, in **\[DelDuchetto-FROBAI\]** a regression model is trained to assess users' engagement in real-time from the robot point of view. In **\[Castri-ICSR22\]** a causal framework has been exploited for modeling and predicting human spatial interactions in social robotics contexts.

To maintain engaging interactions with its users, robots need to adapt in real-time to different changing users state and behaviour. In this direction **\[DelDuchetto-RAL22\]** proposes an adaptation framework where a robot deployed in long-term scenarios learns from first-hand experience during interactions what is the best action to perform at each moment during an interaction based on the engagement state of the users. This method has proven to increase the time users spend interacting with the robot.

## Navigation and Localisation

Human inhabitated environments like homes, museums and shopping malls are challenging scenarios to navigate in for mobile robots. 

In this context, **\[Krajnik-IROS16\]** presented a localization and mapping system based on a spatiotemporal occupancy grid that explicitly represents the persistence and periodicity of the individual cells and can predict the probability of their occupancy in the future. The proposed representation improves the localisation accuracy and the efficiency of path planning. In **\[Fentanes-ICRA15\]**, we present an approach for the topological navigation of service robots in dynamic indoor environments this approach uses a topological representation of the environment that simplifies the definition of navigation actions and is augmented with a spatiotemporal model that specifically represents changes that stem from events in the environment, which impact on the success probability of planned actions which allows the robot to predict action outcomes and to devise better navigation plans. In **\[Hanheide-HRI17\]**, we have also shown how better HRI can be facilitated by exploiting long-term spatiotemporal experience, similar to the approach above, but directly linking long-term autonomy with setting goals for a mobile robot. In populated environments, the ability to be able to predict the directions people are heading is useful for robots to plan suitable paths. The machine learning method in **\[Sun-ICRA18\]** allows us to learn a model for such predictions from long-term experience.
In **\[DelDuchetto-RAL18\]** a method is proposed to learn to detect and recover from navigation failures using the help that the robot receives from nearby humans. The proposed approach enables the robot to automatically generate recovery trajectories in future failures, improving the autonomy of the robot navigation in long-term scenarios. 

## Robot Vision


### References
- **\[DelDuchetto-RAL18\]** F. Del Duchetto, A. Kucukyilmaz, L. Iocchi and M. Hanheide, **"Do Not Make the Same Mistakes Again and Again: Learning Local Recovery Policies for Navigation From Human Demonstrations"**, in IEEE Robotics and Automation Letters, vol. 3, no. 4, pp. 4084-4091, Oct. 2018, doi: [10.1109/LRA.2018.2861080](https://doi.org/10.1109/LRA.2018.2861080).
- **\[DelDuchetto-ROMAN19\]** F. Del Duchetto, P. Baxter and M. Hanheide, **"Lindsey the Tour Guide Robot - Usage Patterns in a Museum Long-Term Deployment"**, 2019 28th IEEE International Conference on Robot and Human Interactive Communication (RO-MAN), New Delhi, India, 2019, pp. 1-8, doi: [10.1109/RO-MAN46459.2019.8956329](https://doi.org/10.1109/RO-MAN46459.2019.8956329).
- **\[DelDuchetto-FROBAI20\]**  Del Duchetto F, Baxter P and Hanheide M (2020) **"Are You Still With Me? Continuous Engagement Assessment From a Robot's Point of View"**, Frontiers in Robotics and AI 7:116. doi: [10.3389/frobt.2020.00116](https://doi.org/10.3389/frobt.2020.00116)
- **\[Castri-ICSR22\]** L. Castri, S. Mghames, M. Hanheide and N. Bellotto (2022) **“Causal Discovery of Dynamic Models for Predicting Human Spatial Interactions”**, Proceedings of the International Conference on Social Robotics (ICSR). doi: [10.1007/978-3-031-24667-8_14](https://doi.org/10.1007/978-3-031-24667-8_14)
- **\[DelDuchetto-RAL22\]** F. Del Duchetto and M. Hanheide, **"Learning on the Job: Long-Term Behavioural Adaptation in Human-Robot Interactions"**, in IEEE Robotics and Automation Letters, vol. 7, no. 3, pp. 6934-6941, July 2022, doi: [10.1109/LRA.2022.3178807](https://doi.org/10.1109/LRA.2022.3178807).
- **\[Fentanes-ICRA15\]** J. P. Fentanes, B. Lacerda, T. Krajník, N. Hawes and M. Hanheide, **"Now or later? Predicting and maximising success of navigation actions from long-term experience"**, in 2015 IEEE International Conference on Robotics and Automation (ICRA), Seattle, WA, USA, 2015, pp. 1112-1117, doi: [10.1109/ICRA.2015.7139315](https://doi.org/10.1109/ICRA.2015.7139315).
- **\[Krajnik-IROS16\]** T. Krajník, J. Pulido Fentanes, M. Hanheide and T. Duckett, **"Persistent localization and life-long mapping in changing environments using the Frequency Map Enhancement"**, 2016 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS), Daejeon, Korea (South), 2016, pp. 4558-4563, doi: [10.1109/IROS.2016.7759671](https://doi.org/10.1109/IROS.2016.7759671).
- **\[Hanheide-HRI17\]** M. Hanheide, D. Hebesberger and T. Krajník, **"The when, where, and how: An adaptive robotic info-terminal for care home residents"**, in Proceedings of the 2017 ACM/IEEE International Conference on Human-Robot Interaction, pp. 341-349, March 2017, doi: [10.1145/2909824.3020228](https://doi.org/10.1145/2909824.3020228)
- **\[Polvara-RAL21\]** R. Polvara, M. Fernandez-Carmona, G. Neumann and M. Hanheide, **"Next-Best-Sense: A Multi-Criteria Robotic Exploration Strategy for RFID Tags Discovery"**, in IEEE Robotics and Automation Letters, vol. 5, no. 3, pp. 4477-4484, July 2020, doi: [10.1109/LRA.2020.3001539](https://doi.org/10.1109/LRA.2020.3001539).
- **\[Polvara-RAL22\]** R. Polvara, F. Del Duchetto, G. Neumann and M. Hanheide, **"Navigate-and-Seek: A Robotics Framework for People Localization in Agricultural Environments"**, in IEEE Robotics and Automation Letters, vol. 6, no. 4, pp. 6577-6584, Oct. 2021, doi: [10.1109/LRA.2021.3094557](https://doi.org/10.1109/LRA.2021.3094557).
- **\[Sun-ICRA18\]** L. Sun, Z. Yan, S. M. Mellado, M. Hanheide and T. Duckett, **"3DOF Pedestrian Trajectory Prediction Learned from Long-Term Autonomous Mobile Robot Deployment Data"**, in 2018 IEEE International Conference on Robotics and Automation (ICRA), Brisbane, QLD, Australia, 2018, pp. 5942-5948, doi: [10.1109/ICRA.2018.8461228](https://doi.org/10.1109/ICRA.2018.8461228).
