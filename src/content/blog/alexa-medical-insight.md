---
title: "How an Amazon Alexa skill can open the door to data-driven medical insights"
date: 2020-02-20T20:47:36-08:00
draft: false
description: "What incredible medical insights are just waiting to be found if we can unlock new data streams?"
tags: ["speculative", "hackathon", "data-acquisition"]
---


There are a huge number of "minor symptoms" in the world that go largely unreported.  Sore throats, sniffles, dull pains, chest pressures, headaches... the list goes on.  These symptoms are generally not going to prompt a patient to call up their doctor's office.  Nor is the patient likely to remember them at all once their next appointment finally comes around.

Doctors wish they could change this.  We'll explore how we *can* change this, and examine the effects of widespread symptom reporting from a data science perspective.


## How does your head feel?

A physician from Harvard told me about the "headache diary" conundrum while we brainstormed ideas for the 2018 UC Health Hack[^1].  One of the most common physician requests for migraine patients is to keep a headache diary—a journal that logs headache occurrences, pain levels, potential triggers, and medication usage.   Headache diaries serve multiple critical functions.  The journals help doctors narrow in on diagnoses, they reveal trend data that can identify triggers, and they safeguard against medication overdose.   Unfortunately, it's a rare occurrence for patients to actually come to their next appointment with a filled out journal.

[^1]: The UC Health Hack is a medical-focused hackathon often hosted at the UC San Diego School of Medicine.

There are many valid reasons why headache diaries aren't often filled out.  If the patient keeps a physical journal, it's inconvenient to carry or to print out forms and easy to forget to bring a physical copy to the doctor.  If they use an app, it's challenging to send data to the doctors office and easy to forget to log headaches in the first place.

Our team set out to fix this issue by building an Amazon Alexa skill.  The skill would fill out virtual headache diary entries by engaging the patient in a friendly conversation each night.  We included a queryable database of all headache events that could be linked up directly to the patient's care provider.  With this tool, medication usage, headache occurrences and severity for a given patient could be easily pulled, aggregated, or inspected for anomalies by our software or by a physician prior to an appointment.

It was our thought that by sending migraine patients home with a small, inexpensive smart assistant we would lower the barriers to proper headache reporting.


## Just the head of the iceberg

We soon realized that this concept could extend well beyond just headaches.  This skill could similarly lower the barriers to reporting all of those "minor symptoms" we talked about above.

Widespread symptom reporting would lead to a tremendous influx of valuable medical data...

Hiding in those small symptoms is a proverbial gold mine of medical insight.  A complete picture of symptoms both large and small can make many diagnoses a trivial task.  Even more exciting, a data stream of minor symptoms along with medication use and patient data can usher in a new age of medical discovery by examining relationships between symptoms, medications, and other aspects of the patient.

Artificial intelligence models have already proven capable of diagnosis, pattern recognition, prediction, and anomaly detection within the medical field.  With the increasingly common utilization of deep learning techniques, much of the world has discovered that AI is extremely useful once you give it enough data.  With a tool capable of unlocking  new data streams, we can let current machine-based analysis models go to town, and we can train novel models to capitalize on our new, data-driven understanding of the medical world.


## Not just health concerns

This concept raises some pretty major concerns pertaining to data ethics and privacy.  Mass data collection is where things get exciting, but it can also get pretty scary.

Large amounts of data can be used for both good and ill intent—a common theme in most data science endeavors.  Although health care providers can do great things with medical data, it's important to also examine the effects this concept would have when considering prying health insurance agencies.

What happens if your pattern of chest pains leads to a clustering model grouping you in with frequent smokers, even though you never smoke?  If this data is looked at by your physician, it would result in a conversation at your next appointment during which you'd be able to correct the mistake.  On the other hand, if this inference is purchased and blindly trusted by your health insurance company...  Boom.  Your insurance costs have just skyrocketed.

Although human-in-the-loop ML systems[^2] are commonplace (and necessary) in medical environments, would health insurance agencies really behave the same way?  It's unclear if current HIPAA regulations are enough to protect against the purchase and abuse of this medical data.  It's likely that current laws will do little to address these issues, and the U.S. is notoriously slow-moving when it comes to passing data privacy legislation...

[^2]: Human-in-the-loop is an approach towards artificial intelligence which continually cycles between utilizing machine- and human intelligence.  This often involves human labelling of training data, as well as human validation of model outputs—such as correcting the clustering model if a patient is incorrectly grouped with smokers.  [You can read more about this approach here](https://www.computerworld.com/article/3004013/why-human-in-the-loop-computing-is-the-future-of-machine-learning.html).

In order for data to be collected, the patient first needs to trust in how the data will be handled.  So, a critical aspect of this idea must be direct data transfer straight to the care provider, as well as proper surrounding data privacy policies.

For such a concept to be trusted, to be ethical, and to be beneficial to all, it's important that policies around data collection and privacy are encouraged, refined, and continually respected.  Only then can we hope to realize this "gold mine" of medical insights, and rest assured that it's only proverbial gold we're talking about.


## Stay tuned

If you're interested in data privacy, stay tuned for future blog posts where I will take a stab at federated learning and model extraction attacks.  Federated learning is an approach for training AI models that could address many data privacy and data ownership concerns.  Model extraction attacks on the other hand could undermine all of the privacy benefits that federated learning would offer!

Thanks for reading.