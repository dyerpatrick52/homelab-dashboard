## This document covers convention of branches, commits, PRs, merging ##

- Branches are named as follows
    - \<TICKET-ID>/\<SHORT-DESC(optional)>
    - Where TICKET-ID is HOMELABAPP-#, where # is any number >= 1
- Commits contain short but meaningful messages, do NOT over write.
- Commits and PR titles are prefaced with "HOMELABAPP-#: "
- Pull Requests will include
    - Title
    - Description of changes
    - Motivation of changes
    - What testing has been done
    - Link to ticket

- Branches are only to be brought into main via PR merge, no pushing directly to main.
- We will follow squash-only merging style
- Tickets move to In Review when the PR checks are running, pass means move to Done (once CI is added in later ticket)
- PR's are reviewed before merging