---
layout: single
title: "Multi-Agent Path Planning"
permalink: /portfolio/mapf/
author_profile: true
---

{% include base_path %}

Recent advances in robotics have laid the foundation for building large-scale multi-agent systems. A great deal of research has focused on coordinating agents to fulfill different types of tasks. We focus on one fundamental task - to navigate teams of agents in a shared environment to their goal locations without colliding with obstacles or other agents. One well-studied abstract model for this problem is known as **Multi-Agent Path Finding (MAPF)**. It is defined on a general graph with given start and goal vertices for agents on this graph. Each agent is allowed to wait at its current vertex or move to an adjacent vertex from one discrete timestep to the next one. We are asked to find a path for each agent such that no two agents are at the same vertex or cross the same edge at any timestep (because this would result in a collision). The objective is to minimize the sum of the arrival times of all agents.

Our interest here focuses on pushing the limits of MAPF solving by developing a variety of AI and optimization techniques to systematically reason about the **collision-resolution space** of the problem. We are particularly interested in scalable path planning algorithms that can handle hundreds to thousands of agents while considering temporal constraints, dynamic obstacles, and heterogeneous agent capabilities.

## Key Research Directions

### Symmetry Reasoning for MAPF

One of the reasons MAPF problems are so hard to solve is due to a phenomenon called pairwise path symmetry, which occurs when two agents have many equivalent paths, all of which appear promising, but which are pairwise incompatible because they result in a collision. The symmetry arises commonly in practice and can produce an exponential explosion in the space of possible collision resolutions, leading to unacceptable runtimes for currently state-of-the-art MAPF algorithms that employ heuristic search, such as Conflict-based Search (CBS). To break symmetries, we are interested in constraint-based reasoning techniques, to detect the symmetries as they arise and to efficiently eliminate, in a single branching step, all permutations of two currently assigned but pairwise incompatible paths.

### Heuristics for MAPF with Conflict-Based Search

Conflict-Based Search (CBS) and its enhancements are among the strongest algorithms for MAPF. However, existing variants of CBS do not use any heuristics that estimate future work. Introducing admissible heuristics to guide the high-level search of CBS can significantly reduce the size of the CBS search tree and its runtime. We are interested in developing more informed heuristics to guide the high-level search of bounded-suboptimal CBS.

### Large Neighborhood Search for MAPF

Sometimes, we are interested in a good solution but not necessarily a proof of how good the solution is. Since providing optimality proofs is computationally expensive, we are interested in Large Neighborhood Search (LNS) algorithms that repeatedly replan paths for subsets of agents via prioritized planning. They give up optimality guarantees but find near-optimal solutions for thousands of agents in practice.

### Learning-Guided Planning

Machine Learning (ML) can complement the search algorithms and boost their performance by automatically discovering policies that are better than the hand-crafted ones and tailoring the randomized heuristics to the instances at hand. Examples include learning to generate priority orderings for prioritized planning and to select subsets of agents and determine the stopping criterion for LNS.

[Back to Research page](/portfolio/)
