---
title: Deep Convergent Actor Critic paper Reproduction
---
https://arxiv.org/pdf/1902.04257.pdf

Deep COACH is an improvement on the original COACH paper in order to learn high dimensional observation. So Intelligent agents must be able to learn complex behaviors as specified by (non-expert)human users.  Moreover, they will need to learn these behaviors within a reasonable amount of time while efficiently leveraging the sparse feed-back a human trainer is capable of providing.

<!--more-->

## I. Motivation
Adjust COACH to making use of the higher dimensional data and solve the problem of sparsity

### II. Upate Rules

    - Policy Gradient
<p align="center">
  <img src="/assets/images/policy_gradient.png" width="350" title="hover text">
</p>

    I- Eligibility traces with importance sampling

<p align="center">
  <img src="/assets/images/eligibility.png" width="350" title="hover text">
</p>

### III. How COACH got adjusted to DQN

- In favor of an eligibility Q-Networks, deep COACH extends this idea using a replay
buffer where the atomic elements stored are whole windows of experience, rather than individual transitions.
- Eligibility traces are averaged over the entire minibatch and the mean eligibility trace is applied as a single updtate
- Using replay buffer creates a discrepancy between the policy being optimized at current timestep (simply use greedy selection) and the policy under which data sampled from the buffer was generated: use off-policy learning with importance sampling.
- Use unsupervised pre-training
- For robustness, restrict to relatively small policy network architectures
- To prevent the learned policy π assigning all the probability to a single action at some state, employ the entropy regularization
- Limit the number of units in hidden layer (two fully-connected layers) to no more than 30

### VI. Implementation

- **Pre-training parameters**
 - optimizer: Adam
 - learning rate: 0.001
 - mini-batch size: 32
 - 10,000 images
 
- **Policy network paramters**
 - observation representation: 84 * 84
 - optimizer: RMSProp
 - human delay factor d: 1
 - learning rate: 0.00025
 - eligibility decay λ: 0.35
 - window size L: 10
 - mini-batch size m: 16
 - entropy regularization coefficient β: 1.5
 
 ### V. Results on Malmo Env
 - COACH: not enough generalization; get locked into a sub-optimal policy
 - Deep TAMER: demonstrate a certain degree of unstability
 - Deep COACH: the vast majority of trainer feedback consists of negative signals discouraging incorrect behavior at the start of learning whereas a relatively smaller number of positive signals are actually needed to guide the agent towards good behavior. (also needs less feedbacks)

