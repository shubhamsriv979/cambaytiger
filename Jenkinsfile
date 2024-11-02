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
        GITHUB_TOKEN = credentials('c1828ff3-b81e-4981-82e8-a8215dd0309c')  // Ensure the credential ID matches
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
                    if (isUnix()) {
                        sh 'npm install'  // Use shell command for Linux/Unix agents
                    } else {
                        bat 'npm install'  // Use bat for Windows agents
                    }
                }
            }
        }
        stage('Run Cypress Tests') {
            steps {
                script {
                    // bat 'npx cypress run --headed --browser chrome --spec "cypress/e2e/cambaytigerstage.js"'  // Run Cypress tests on Windows agents

                    def testSpec = (params.ENVIRONMENT == 'stage') 
                        // ? "cypress/e2e/cambaytigerstage.js" 
                        // : "cypress/e2e/cambaytigerprod.js"

                        ? "cypress/e2e/stage/cambaytigerstage.js,"+
                          "cypress/e2e/stage/cambaytigerstage1.js," 
                        : "cypress/e2e/prod/cambaytigerprod.js"+
                          "cypress/e2e/prod/cambaytigerprod1.js"
                    
                    bat """
                        npx cypress run --headed --browser chrome --spec "${testSpec}"
                    """
                }
            }
        }
    }
    post {
        always {
            echo "Pipeline completed."
        }
        success {
            echo 'The pipeline completed successfully!'
        }
        failure {
            echo 'The pipeline failed. Check the logs!'
        }
    }
}
