---
Variance Reduced COACH
---

In this paper, we propose an alternative interpretation of coach, in which we show that the human feedback can instead be thought of as replacing the reward signal typically present in RL. This fundamentally different interpretation of the human feedback then motivates us to consider adding to coach a variance-reduction strategy commonly used in RL. To this end, we propose and study vr-coach: a novel extension of coach that maintains an estimate of a value-like quantity, and then uses this estimate as a control variate in the learning algorithm.

<!--more-->

## I. Motivation

The human feedback can instead be thought of as replacing the reward signal typically present in RL and adding on coach a variane reduced strategy.

## II. Episodic COACH

     - Real Time COACH
_ COACH updates are not made based on the current policy gradient at each timestep, but rather based on an eligibility trace eλ.
_ The eligibility trace is an exponentially decaying accumulator of past policy gradients that allows for smoothing observed human feedback over a series of past transitions
<p align="center">
  <img src="/assets/images/realtimecoach.png" width="350" title="hover text">
</p>

      - Episodic COACH
_ We assume that the policy updates, ∆θt , are computed at each time step but are not applied to the behavior policy πθ until the episode ends
_ This method amounts to gathering each ∆θt , computing the sum, and then applying a single update at the end of each episode, i.e.,
<p align="center">
  <img src="/assets/images/episodicoach.png" width="350" title="hover text">
</p>

      - Episodic Update
_ Examining the Eligibility trace , we notice that it can be written as :
<p align="center">
  <img src="/assets/images/eligibility.png" width="350" title="hover text">
</p>
_ And also the episodic update as :
<p align="center">
  <img src="/assets/images/updaye.png" width="350" title="hover text">
</p>
 
_ Update computed in REINFORCE except that here we have the human feedback signal in place of the reward and λ in the place of discount factor.

## II. VR-COACH

_ Therefore,we arrive at a new interpretation of this episodic variant of real-time coach: that it is the classical reinforce algorithm where the human feedback signal is interpreted as the reward.
_ we are interested in whether policy-gradient variance reduction techniques based on control variates are able to improve the learning speed and stability of coach in the HCRL setting. To do so, we propose a new HCRL technique called vr-coach.
_ In vr-coach, we employ the full actor-critic method from the RL literature, and we interpret human feedback as the reward.

## II. Update Rules

_ The vr-coach actor update is given by :
<p align="center">
  <img src="/assets/images/actorupdate.png" width="350" title="hover text">
</p>
_ the critic update:
<p align="center">
  <img src="/assets/images/criticupdate.png" width="350" title="hover text">
</p>
_ Notice how the human feedback is directly fed to the actor in coach, while in vr-coach it passes through the critic. This means that in coach, the actor does not learn anything when there is no human feedback. In vr-coach, however, the actor can still learn from the critic even if the human is not providing feedback
<p align="center">
  <img src="/assets/images/a2c.png" width="350" title="hover text">
</p>


