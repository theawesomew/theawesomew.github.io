# The problem of localization: How to think like an engineer

### The problem

Robot localization is defined as 'a robot's ability to establish its own position and orientation within its frame of reference'. This essentially describes the ability of the robot to 'know where it is' in a given environment. This task is vital to the creation of accurate & efficient autonomous robotic behaviour in all domains - and especially in FTC where the ability to move with extreme precision is vital for creating solid, reliable opmodes. 

However, the task of localization is actually pretty tough and engineers all around the world are constantly innovating on how we can ensure that the self-driving cars, the warehouse factory bots, and the spaceships of the future can be sure of exactly where they are at all times.

### How this relates at all

As the many nerds of the FIRST program do, FTC teams have formulated all kinds of creative, resourceful, and innovative engineering solutions to the problem of localization - all of which seek to build upon the others to develop more & more accruate control systems. 

For like 10 minutes ( because hearing myself speak for longer will literally make me want to gouge my eyes out), we're going to address 3 key ways that FTC teams have approached this problem in the past and as we progress through these - I'm hoping that they highlight not only some clever ideas but, that the core of developing engineering solutions is about optimization - it's vital to always be looking at what you've done and considering how you could make it even better.

## Using timers

This concept is pretty simple. If you know the maximum velocity of your robot and you know the distance you want to travel, you can just divide the distance by the velocity.

You can rely on some nonsense like this for your math...

<img src="https://images.saymedia-content.com/.image/t_share/MTc0MTc0MDM4NTM1NDQ4NDQ0/using-the-magic-triangle-for-speed-distance-and-time-compound-measures.jpg" width="500"/>

And presto! You can have a way of localizing your robot. Keep track of all of the distances you 'request' it to go & then add them all together.

This method - while a completely viables means of directing your robot's motion - is not necessarily the most accurate & it falls into a couple of pitfalls.

They are... ***What? You thought you'd just listen & get told all the answers? Huh? Nope. I'm leaving this future Will to discuss with you all & cringe at how unfunny this 'breaking the fourth wall' crap is. BUT, Markdown has cool lists :)***

- See?
- It's sick
- You know how much effort this takes in vanilla html?
- It's like 2 seconds here


## Using encoders

An alternative solution to the problem of localization is through the use of encoders. Encoders are electromechanical devices which 'count' the number of rotations an axel does over a given period and returns that information as a digitally encoded signal called a PWM (pulse-width modulated) signal. The concept is simple: if you know where the robot was relative to its environment initially & the diameter of the wheel, you can query the robot's encoders to calculate its 'pose' over time. This enables you to very accurately assess the position of the robot over time.

<img src="https://blog.pitsco.com/hs-fs/hubfs/Blog%20Images/Torquenado2-1366-0917.png?width=514&name=Torquenado2-1366-0917.png" width="500">

However, much like the 'timer' based system we discussed before hand, it has some flaws...

**Speak. This isn't a warning, it's a promise**

## Using odometry

The final solution to localization we'll discuss is a technique called 'Dead-Wheel Odometry'. Dead-wheel odometry is the 3 unpowered wheels that are attached to axel encoders. The premise is that as the robot moves - and only when the robot moves - the deadwheel roll along the ground correspondingly. This means that motion is only detected by the odometry system when motion actually occurs leading to significantly more accurate results than either timer-based or encoder-based systems. Using information like the diameter of the wheels, their configuration on the robot, and the encoder values themselves enables teams to accurately localize their robot with essentially 0 error.

<img src="https://i.stack.imgur.com/B0PzT.jpg" width="500">

What's somewhat interesting about dead-wheel odometry is that it's pretty much used exclusively within FTC - most commercial robots have other mechanisms which involve the use of devices like LiDAR, RADAR, infrared transpoders, etc. 

