# Segement Iterable Dedupper

When the (Iterable source)[https://segment.com/docs/connections/sources/catalog/cloud-apps/iterable/] is not aware of the user_id, it will instead generate an anonymous identify call with the email of the user as the anonymous_id. In order to ensure that these anonymous users are matched against a registered user profile, this function should be used as a destination for all sources in your workspace that could fire identify calls with user_ids

This function works by matching all identify calls with both a user_id and email trait and fires back into Segment a new identify call with the user_id and the email set as an anonymous_id.

This approach works both ways: 
 * when the Iterable source first fires the anonymous identify call with the email set as the anonymous_id, followed by some other source firing an identify call with user_id with email trait 
 * and when some source first fires an identify call with a user_id with an email trait, followed by the Iterable source firing the email as the anonymous_id

# Prerequisites

 * (Node JS)[https://nodejs.org/en/]
 * (Segment Sloth)[https://github.com/christyharagan/segment-sloth]. So install, run ```npm i -g segment-sloth``` (if that fails due to permissioning, on Mac or Linux run ```sudo i -g segment-sloth```)

# Usage

 * Clone and locally check-out, or download this project
 * This project by default has a GitHub action which auto-deploys the function when you commit this to your GitHub repo. If you don't want this functionality, delete the .github folder
 * Edit the sloth.yaml file and replace the values specified. For the access_token, you have three choices
   * Place your workspace access_token in the yaml file. This option is the easiest (as you set it once and no more work is needed, whether deploying from the command line or via the GitHub action) but you may not want to save your access_token in a plain-text file
   * If using the GitHub action that auto deploys the function on commiting to GitHub, you can add a secret to your repository called ```segment-access-token``` and set your access_token there
   * If you want to deploy the function from the command line you can pass your access_token in then
 * To deploy the function you have two choices:
   * You can do so from the command line by running ```sloth deploy``` from the root of the project
   * If you're using the GitHub action, simply push your repo to GitHub repo and you're good to go

In case you're not sure, you can find both your work_slug (Slug) and work_id (ID) by going into the Settings->General Settings of your workspace.

# Customisation

If you want to customise the function to suit your needs, follow the manual at (Segment Sloth)[https://github.com/christyharagan/segment-sloth]. This function is written in TypeScript.