## This document covers convention of branches ##

- Branches are named as follows
    - \<TICKET-ID>/\<SHORT-DESC(optional)>
    - Where TICKET-ID is HOMELABAPP-n, where n is any number >= 1
- Commits contain short but meaningful messages, do NOT over write.
- Commits are prefaced with "HOMELABAPP-#: "
- Pull Requests will include
    - Title
    - Description of changes
    - Motivation of changes
    - What testing has been done
    - Link to ticket

- Branches are only to be brought into main via PR merge, no pushing directly to main.
- We will follow squash-only merging style
- Tickets move to In Review when the PR checks are running, pass means move to Done
- Either myself or Claude will review PR's before merging