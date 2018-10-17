---
title:  Machine Self-Confidence in Autonomous Systems via Meta-Analysis of Decision Processes
date:   2018-10-15 08:00:00
comments: false
category: pubs
tags: [AI, Trust, ML, Assurances, AIA, FaMSeC, Self-Confidence]
---
#### Notes:
This paper has not yet been published, we are trying to find a good venue to publish in. We discuss the concept of Factorized Machine Self-Confidence (FaMSeC), and develop one of its components called Solver Quality ($x_Q$). Solver Quality and FaMSeC are examples of algorithmic assurances which I define in [this paper][assurances].

> **Abstract**: Algorithmic assurances from advanced autonomous systems assist human users in understanding, trusting, and using such systems appropriately. Designing these systems with the capacity of assessing their own capabilities is one approach to creating an algorithmic assurance. The idea of 'machine self-confidence' is introduced for autonomous systems. Using a factorization based framework for self-confidence assessment, one component of self-confidence, called 'solver-quality', is discussed in the context of Markov decision processes for autonomous systems. Markov decision processes underlie much of the theory of reinforcement learning, and are commonly used for planning and decision making under uncertainty in robotics and autonomous systems. A 'solver quality' metric is formally defined in the context of decision making algorithms based on Markov decision processes. A method for assessing solver quality is then derived, drawing inspiration from empirical hardness models. Finally, numerical experiments for an unmanned autonomous vehicle navigation problem under different solver, parameter, and environment conditions indicate that the self-confidence metric exhibits the desired properties. Discussion of results, and avenues for future investigation are included.

#### PDF Link(s): [pre-print][arxiv]

#### BibTeX:
``` TeX

@ARTICLE{Israelsen2018-qz,
  title         = "Machine {Self-Confidence} in Autonomous Systems via
                   {Meta-Analysis} of Decision Processes",
  author        = "Israelsen, Brett W and Ahmed, Nisar R and Frew, Eric and
                   Lawrence, Dale and Argrow, Brian",
  month         =  oct,
  year          =  2018,
  archivePrefix = "arXiv",
  primaryClass  = "cs.LG",
  eprint        = "1810.06519"
}

```

[arxiv]:       http://bisraelsen.site/SQ
[assurances]:  http://bisraelsen.site/assurances