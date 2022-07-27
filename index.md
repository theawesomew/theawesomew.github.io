# The problem of localization: How to think like an engineer

### The problem

Robot localization is defined as 'a robot's ability to establish its own position and orientation within its frame of reference'. This essentially describes the ability of the robot to 'know where it is' in a given environment. This task is vital to the creation of accurate & efficient autonomous robotic behaviour in all domains - and especially in FTC where the ability to move with extreme precision is vital for creating solid, reliable opmodes. 

However, the task of localization is actually pretty tough and engineers all around the world are constantly innovating on how we can ensure that the self-driving cars, the warehouse factory bots, and the spaceships of the future can be sure of exactly where they are at all times.

### How this relates at all

As the many nerds of the FIRST program do, FTC teams have formulated all kinds of creative, resourceful, and innovative engineering solutions to the problem of localization - all of which seek to build upon the others to develop more & more accruate control systems. 

For like 10 minutes ( because hearing myself speak for longer will literally make me want to gouge my eyes out), we're going to address 3 key ways that FTC teams have approached this problem in the past and as we progress through these - I'm hoping that they highlight not only some clever ideas but, that the core of developing engineering solutions is about optimization - it's vital to always be looking at what you've done and considering how you could make it even better.

## Using timers

This concept is pretty simple. If you know the maximum velocity of your robot and you know the distance you want to travel, you can just divide the distance by the velocity.

You can rely on some nonsense like this for you math...

![](https://images.saymedia-content.com/.image/t_share/MTc0MTc0MDM4NTM1NDQ4NDQ0/using-the-magic-triangle-for-speed-distance-and-time-compound-measures.jpg)

## Using encoders

## Using odometry

<img src="https://i.stack.imgur.com/B0PzT.jpg" width="500">

