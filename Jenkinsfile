pipeline {
    agent any
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
                    if (isUnix()) {
                        sh 'npx cypress run --headed --browser chrome'  // Run Cypress tests on Linux/Unix agents
                    } else {
                        bat 'npx cypress run --headed --browser chrome'  // Run Cypress tests on Windows agents
                        

                    }
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
