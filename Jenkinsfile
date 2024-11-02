pipeline {
    agent any

    parameters {
        choice(
            name: 'ENVIRONMENT',
            choices: ['stage', 'prod'],
            description: 'Choose the environment to run tests against'
        )
    }

    environment {
        NODE_VERSION = '16.20.2'
        
        // Add required paths to the PATH environment variable
        PATH = "/var/lib/jenkins/.nvm/versions/node/v${NODE_VERSION}/bin:/root/google-cloud-sdk/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
    }

    stages {

        stage('Checkout') {
            steps {
                script {
                    git url: "git@github.com:shubhamsriv979/cambaytiger.git", branch: 'main'
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Run Cypress Tests') {
            steps {
                script {
                    bat 'npx cypress run --headed --browser chrome --spec "cypress/e2e/cambaytigerstage.js"'  // Run Cypress tests on Windows agents
                    // def testSpec = (params.ENVIRONMENT == 'stage') 
                    //     ? "cypress/e2e/Cambaytiger/stage/testtask.js," 
                    //     //   "cypress/e2e/Cambaytiger/stage/task2.js," +
                    //     //   "cypress/e2e/Cambaytiger/stage/taskloop.js," +
                    //     //   "cypress/e2e/Cambaytiger/stage/task1.js," +
                    //     //   "cypress/e2e/Plixlife/stage/task1.js," +
                    //     //   "cypress/e2e/Plixlife/stage/task2.js," +
                    //     //   "cypress/e2e/Plixlife/stage/task3.js," +
                    //     //   "cypress/e2e/Plixlife/stage/task4.js," +
                    //     //   "cypress/e2e/Plixlife/stage/testtask.js"
                    //     : "cypress/e2e/Cambaytiger/prod/testtask.js,"
                    //     //   "cypress/e2e/Cambaytiger/prod/task2.js," +
                    //     //   "cypress/e2e/Cambaytiger/prod/taskloop.js," +
                    //     //   "cypress/e2e/Cambaytiger/prod/task1.js," +
                    //     //   "cypress/e2e/Plixlife/prod/task1.js," +
                    //     //   "cypress/e2e/Plixlife/prod/task2.js," +
                    //     //   "cypress/e2e/Plixlife/prod/task3.js," +
                    //     //   "cypress/e2e/Plixlife/prod/task4.js," +
                    //     //   "cypress/e2e/Plixlife/prod/testtask.js"
                    
                    // sh """
                    //     npx cypress run --spec "${testSpec}"
                    // """
                }
            }
        }
    }

    
}
