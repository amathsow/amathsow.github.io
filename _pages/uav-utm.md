---
layout: single
title: "Multi-UAV Coordination in UTM"
permalink: /portfolio/uav-utm/
author_profile: true
---

{% include base_path %}

We are interested in addressing the challenges of coordinating large-scale Unmanned Aerial Vehicle (UAV) fleets in shared and dynamic airspace. Our research focuses on preflight planning systems that handle temporal No-Fly Zones (NFZs), heterogeneous vehicle profiles, and strict delivery deadlines for urban air mobility applications.

## Problem Overview

Preflight planning for large-scale UAV fleets in dynamic, shared airspace presents significant challenges, including:

- **Temporal No-Fly Zones (NFZs)**: Dynamic restrictions that appear and disappear over time
- **Heterogeneous vehicle profiles**: Different UAVs with varying capabilities, speeds, and payloads
- **Strict delivery deadlines**: Time-critical missions requiring precise scheduling
- **Inter-agent conflicts**: Multiple UAVs sharing the same airspace simultaneously

## Our Approach: DTAPP-IICR

We propose **DTAPP-IICR**: a Delivery-Time Aware Prioritized Planning method with Incremental and Iterative Conflict Resolution. Our framework:

1. **Generates an initial solution by prioritizing missions based on urgency**
2. **Computes roundtrip trajectories using SFIPP-ST, a novel 4D single-agent planner (Safe Flight Interval Path Planning with Soft and Temporal Constraints)**
3. **Resolves conflicts iteratively using Large Neighborhood Search, guided by a geometric conflict graph**

### Key Features

- **SFIPP-ST: Handles heterogeneous UAVs, strictly enforces temporal NFZs, and models inter-agent conflicts as soft constraints**
- **Scalability: Designed to handle large-scale fleets (hundreds to thousands of UAVs)**
- **Real-world deployment: Tested in urban delivery scenarios**

## Applications

- Urban air mobility
- On-demand delivery systems
- Emergency response coordination
- Infrastructure inspection

[View project: 4D UAV Traffic Management](https://github.com/amathsow/4DPlanning)

[Back to Research page](/portfolio/)
