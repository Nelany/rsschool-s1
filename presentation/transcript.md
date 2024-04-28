## Authentication vs. Authorization: Differences, Methods, and Techniques


Hello, today i will talk about authentication and authorization.
These are two critical concepts in access control, used in identity and access management. They are essential components of any system or web application, which  determine the security of a system. You cannot have a secure solution unless you have configured both authentication and authorization correctly.

Authentication is verifying the true identity of a user or entity, while authorization determines what a user can access and ensures that a user or entity receives the right access or permissions in a system.  Authentication is a prerequisite to authorization. 



**Authentication** is the process of verifying that a user is who they claim to be. For example, when you go through security at an airport, you show your ID to authenticate your identity.

**Authorization** is the process of determining if a user is allowed to perform certain actions or access certain resources or data. For example, an airline needs to determine which people can come on board.

Authentication and authorization work together to control access to protected resources. They play separate but equally essential roles in securing applications and data.

Common authentication technologies include OTPs, fingerprint recognition, and smart cards. For authorization, systems like OAuth are prevalent. Types of authorization include discretionary access control (DAC), mandatory access control (MAC), role-based access control (RBAC), and attribute-based access control (ABAC).

Let's look at the differences and the methods used to implement them. We'll also look at how authentication and authorization are adapting  to a modern IT environment, with remote connection of users to corporate systems becoming the norm.



## What Is Authentication?

Often confused with Authorization, Authentication is essentially verifying the true identity of an entity. It enables access control by proving that a user’s credentials match those in an authorized user’s database. Identity verification can ensure system security, process security, and corporate information security.

Authentication helps ensure that only authorized users can gain access to protected resources on the network level. Limited access may include networks, ports, hosts, and other services.





## Why Is User Authentication Important?

User authentication enables you to verify the identity of any user attempting to access the corporate network or computing resource. Authentication helps organizations ensure that only authorized users access protected resources. It prevents unauthorized entities from accessing and potentially stealing information, damaging systems, or causing various problems. 

The authentication process authorizes a human-to-machine credentials transfer during interactions on a certain network to confirm the user’s identity. Human-to-computer interactions perform user authentication to authorize access on wired and wireless networks to enable access to networked and internet-connected systems and resources. 

User authentication should not be confused with machine authentication, a different process that automates authentication and does not require user input. Common examples include automatically logged-in and guest accounts that do not require user input.




## Types of Authentication

- **Passwords**—considered “old school” and less secure but are still commonly used in almost all authentication schemes. 
- **One-time Password (OTP)‍**—grants a user or device one-time access to a system. Authentication systems can deliver an OTP via email, text message, or a physical access token.
- **Token authentication**—grants access to a user or device based on an access token they possess. The token can be a hardware device or a software token passed to their browser from an identity provider.
- **Single Sign-on (SSO)** ‍—enables login to multiple applications via a central identity provider. The identity provider can be a service with a large user base, such as Google or Facebook, or an organizational identity provider, such as Active Directory.
- **Biometric authentication**—uses an inherence factor, such as the user’s face or fingerprint to identify them. There are increasingly sophisticated ways to compare a photo or scan of a person’s biological traits with a database of known identities.
- **Multi-Factor Authentication (MFA)** ‍ – This methodology combines multiple forms of authentication to improve security. Typically, an MFA scheme will augment passwords with token-based authentication, OTP, biometric authentication, or several of these.
- **Passwordless authentication** – This is basically a variation on MFA, which uses two authentication factors including fingerprints, magic links, or OTAs to authenticate users without a password.





## What is Authorization?

Authorization, not to be confused with Authentication, occurs after a system has successfully verified the identity of an entity. The system will then allow access to resources such as information, files, databases, or specific operations and capabilities. After a system authenticates a user, authorization verifies access to the required resources. It is the process of determining whether an authenticated user can access a particular resource or perform a specific action. 

For example, after a file server authenticates a user, it can check which files or directories that can be read, written, or deleted. This is where authorization comes into play.





## Why Is User Authorization Important?

User authorization help protect Software as a Service (SaaS) applications and services by ensuring users have the right permissions. It enables organizations to control and secure access to sensitive databases, private and personal data, and corporate resources. 

Organizations typically implement a granular authorization structure that does not grant flat access to all resources. Instead, different organizational roles are assigned access to the resources relevant to their job. This access control practice is called the least privilege principle, and it guides many organizations in protecting their resources from unauthorized access.

Restricting access to resources helps protect critical data like intellectual property, medical records, consumers’ identities, and payroll information. It ensures users have access only to resources required for their role, minimizing the potential damage if a threat actor compromises the account. It also helps employees quickly find resources and information without sifting through all company documents and folders.





## Types of Authorization

- **Discretionary Access Control(DAC)** ‍ – DAC determines privileges depending on the specific user and their access groups. A DAC model allows every object in a system to be accessed by a particular group or identity. Those in charge of granting authorization can provide admin permission to other users.
- **Mandatory Access Control (MAC)** – MAC determines authorization of entities at the operating system level. MAC commonly governs permissions for threads and processes, defining which files and memory objects they can access. 
- **Role-Based Access Control (RBAC**) – RBAC is used to enforce access controls defined in the DAC or MAC model. RBAC builds on predefined roles and privileges, assigns users to roles, and configures a system so that only specific roles can access each object.
- **Attribute-based Access Control (ABAC)** – ABAC is used to enforce access controls in a policy-based manner. It uses attributes, which can be attached to a user, a resource, an object, or an entire environment. An entity is authorized if the authentication system finds that all the attributes defined in the policy are true.




## Authentication vs Authorization: The Differences

Here’s a quick overview of the differences between authentication and authorization. While both are important user management components, there are some key differences that must be considered before implementing them in the right places.

**Basic function**

- Authentication identifies if users or other entities are who they say they are
- Authorization determines if a user or entity is allowed to access a particular asset

**How it works**

- Authentication requires credentials or other information from an entity that can prove their identity
- Authorization uses policies and rules to decide whether to grant access to an authenticated user

**When it happens**

- Authentication happens when the user first connects to a system
- Authorization happens after successful authentication

**How it transfers information**

- Authentication collects information from the user or entity in the form of text (e.g., passwords), unstructured data (e.g., image of the user’s face), or an access token.
- Authorization requires a token proving that the entity is authenticated and additional information about the entity to apply access rules.

**Common standards and methods**

- Authentication is commonly performed using OpenID Connect (OIDC) or other protocols (SAML, OAuth, etc) and may involve methods like passwords, access tokens, and biometric verification.
- Authorization is typically performed using OAuth 2.0 and may involve methods like Role-Based Access Control (RBAC) and Attribute-Based Access Control (ABAC)





## Which Comes First, Authentication or Authorization?

Authentication and authorization work together to control access to protected resources. Since authentication validates identity, this process comes first. Once identity is verified, the authorization process determines the user’s privileges and grants access accordingly. A user cannot be authorized before being authenticated first. 

Authentication and authorization work seamlessly together, making them seem like the same mechanism. However, the two components work as part of an organization’s access management program, an extensive process of controlling, tracking, monitoring, and managing users and system resources.




### How Web Applications Manage and Remember Users (Session)

Web applications need a way to manage and remember users' identities and permissions, and there are two primary approaches: session-based and token-based.



### Session-Based Approach

In the session-based approach, when a user authenticates, the server creates a session and tracks it. It assigns a session ID to that session and sends it back to the client, often stored as an HTTP cookie. This session ID acts as a reference token, linking the user's state on the server to subsequent requests. It allows the server to remember who you are throughout your session.





### Token-Based Approach

In the token-based approach, the server provides the user's details and encrypts them into a single JSON token. Unlike the session-based method, the server doesn't have to remember anything. It's the client's responsibility to include this token with each request. This token acts as a value token and contains the user's entire information.





### Explaining JWT Token

A JWT token has a well-defined structure, consisting of three parts separated by commas: Header, Payload, and Signature. JSON Web Token contains a header, where information about the token generation algorithm is stored, a payload, where the token's useful payload is stored in hashed form, and a signature, which allows controlling the integrity of the token and protects it from modification.






**In conclusion**, authentication and authorization are integral to the security of digital systems. They may seem similar, but their purposes and roles in maintaining system security are distinct. Web applications use either session-based or token-based approaches to manage and remember users, each with its advantages. Understanding these concepts is crucial for anyone venturing into the world of computer science and cybersecurity.