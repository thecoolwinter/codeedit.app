---
title: "Introducing New Packages: WelcomeWindow and AboutWindow"
headline: "Introducing New Packages: WelcomeWindow and AboutWindow"
subhead: "We're excited to introduce two new SwiftUI packages to help you build amazing macOS apps."
description: "We're excited to introduce two new SwiftUI packages to help you build amazing macOS apps: WelcomeWindow and AboutWindow."
date: 2025-07-07
category: update
author: thecoolwinter
image: /blog-assets/2025-07-03-header.png
---

## Introduction

As we build CodeEdit, a natively-built code editor for macOS, we want to share our work with the community. All of our work is open source, and we aim to build our components so they’re reusable, not just in our own app, but in your apps as well. Today we’re introducing two packages that we think will benefit the greater Swift and macOS development community!

Recently [George Tchelidze](https://x.com/x33025) reached out to us with interest in a few of our UI components to see if he could split them out into their own packages to be reused in his own project, Circuit Pro. We’re excited to say that after collaborating with George over the last few months he’s been able to create two packages based on existing components in CodeEdit that we’re both happy with. We’ve integrated both packages into CodeEdit already, replacing the old implementation with the same open source package you can use today.

Let me introduce you to these two new packages.

## WelcomeWindow

One of the first things you'll see when opening CodeEdit is our welcome window. It greets you each time you open CodeEdit if a recently opened project or file is not restored. The welcome window gives the user an intuitive launchpad to start a project or open a recent project.

It’s packaged as a SwiftUI scene with flexible customization options to style the presented actions for your own application. The example app in the repository provides a good introduction to some of the customizations.

![](https://github.com/user-attachments/assets/ee2fc36a-e4ec-4cb3-bd39-f61fc6f3e8fc)

A common feature of document-based apps is a recent projects list. The WelcomeWindow package provides an easy API for registering recent project files, that makes it easy to integrate with `NSDocument` or however you may handle files in your app. Recent projects are automatically added to the WelcomeWindow’s recents list.

## AboutWindow

A core principle of designing macOS apps is inspiring delight where it makes sense. One of the places we decided it made sense was our About Window. This window can be entirely forgotten on some Mac apps, not necessarily losing out on features but missing out on an opportunity to add some delight to an otherwise utilitarian component of every Mac app.

Our new AboutWindow package lets you take advantage of the care we have put into our own about window. For our project, being open source, we feature our amazing contributors and maintainers right in the app. CodeEdit also has a list of library attributions and a link to our license. The AboutWindow package has been built to allow you to include whatever information you think is relevant to your users.

<img class="wide" style="max-height: 50vh" src="https://github.com/user-attachments/assets/0f9a0c7e-dbc1-4dab-b756-cf930cec60aa" />

It comes with some smooth animations as well, continuing a commitment to thoughtful and meaningful delight in design. These animations are built using SwiftUI's `matchedGeometryEffect` so your components can make use of the same header-fade-and-move transition exactly like the built-in transitions.

<figure>
  <video class="wide ratio-16-9" autoplay playsinline muted loop controls preload="metadata">
    <source src="/blog-assets/2025-07-03-example-app-wide.mp4" type="video/mp4">
  </video>
</figure>

## Commitment to community

Publishing these packages continues our commitment to raising the bar for native macOS applications, and the entire Swift community. Our hope is that these are helpful tools for Swift developers as they create new applications, or are looking to quick drop in an improved about window.

If you would like a new feature, find a bug, or want to improve these packages in any other way, come be a part of this and contribute!

A huge shoutout to [George](https://x.com/x33025) for the work to get these packages split from CodeEdit into reusable SwiftUI components. This was no small feat, and his dedication has made these tools available to the entire Swift community. We're excited to see what you build with them!
