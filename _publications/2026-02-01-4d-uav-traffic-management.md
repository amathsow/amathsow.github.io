---
title: "Multi UAVs Preflight Planning in a Shared and Dynamic Airspace"
collection: publications
permalink: /publication/2026-02-01-4d-uav-traffic-management
excerpt: 'DTAPP-IICR: a Delivery-Time Aware Prioritized Planning method with Incremental and Iterative Conflict Resolution for large-scale UAV fleets in dynamic, shared airspace.'
date: 2026-02-01
venue: 'Proceedings of the 25th International Conference on Autonomous Agents and Multiagent Systems (AAMAS)'
authors: '**Amath Sow**, Mauricio Rodriguez Cesen, Fabiola Martins Campos de Oliveira, Mariusz Wzorek, Daniel de Leng, Mattias Tiger, Fredrik Heintz, Christian Esteve Rothenberg'
arxiv: 'https://arxiv.org/abs/2602.12055'
code: 'https://github.com/amathsow/4DPlanning'
paperurl: 'https://arxiv.org/abs/2602.12055'
citation: 'A. Sow, M. Rodriguez Cesen, F. M. C. de Oliveira, M. Wzorek, D. de Leng, M. Tiger, F. Heintz, C. E. Rothenberg. (2026). &quot;Multi UAVs Preflight Planning in a Shared and Dynamic Airspace.&quot; <i>Proceedings of the 25th International Conference on Autonomous Agents and Multiagent Systems (AAMAS 2026)</i>.'
---
Preflight planning for large-scale Unmanned Aerial Vehicle (UAV) fleets in dynamic, shared airspace presents significant challenges, including temporal No-Fly Zones (NFZs), heterogeneous vehicle profiles, and strict delivery deadlines. We propose DTAPP-IICR: a Delivery-Time Aware Prioritized Planning method with Incremental and Iterative Conflict Resolution. Our framework first generates an initial solution by prioritizing missions based on urgency. Secondly, it computes roundtrip trajectories using SFIPP-ST, a novel 4D single-agent planner (Safe Flight Interval Path Planning with Soft and Temporal Constraints). SFIPP-ST handles heterogeneous UAVs, strictly enforces temporal NFZs, and models inter-agent conflicts as soft constraints. Subsequently, an iterative Large Neighborhood Search, guided by a geometric conflict graph, efficiently resolves any residual conflicts.

[View on arXiv](https://arxiv.org/abs/2602.12055) | [View on GitHub](https://github.com/amathsow/4DPlanning)

Recommended citation: A. Sow, M. Rodriguez Cesen, F. M. C. de Oliveira, M. Wzorek, D. de Leng, M. Tiger, F. Heintz, C. E. Rothenberg. (2026). "Multi UAVs Preflight Planning in a Shared and Dynamic Airspace." <i>Proceedings of the 25th International Conference on Autonomous Agents and Multiagent Systems (AAMAS 2026)</i>.
