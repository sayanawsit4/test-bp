# generator-jhipster-testbp

## This is a Jhipster blueprint that can be used in a Jhispter application

This example is used for local deployment and testing only.But will work in stage/prod enviroment too.

## Prerequisites

1. Install Java > 8 [Java](https://adoptopenjdk.net/)
2. Install Node > 10 [Node](https://nodejs.org/en/) (latest version preffered)
3. Install Jhispter 
``
npm install -g generator-jhipster
``
4. Clone this repo
5. Goto test-bp and link the blueprint to npm
```bash
cd test-bp
npm link
```
6. Create another folder myapp in the same directory
7. link the generator
```
npm link generator-jhipster-testbp
```
8. Run the generator
```
jhipster -d --blueprint testbp
```
