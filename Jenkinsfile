pipeline {
    agent any

    environment {
        NODE_VERSION = '16'
    }

    stages {
        stage('Install Node.js via nvm') {
            steps {
                script {
                    // Install and use the specified Node.js version
                    sh '''
                        . ~/.nvm/nvm.sh
                        
                        # Install the specific Node.js version if not already installed
                        nvm install $NODE_VERSION
                        
                        # Use the installed Node.js version
                        nvm use $NODE_VERSION
                        
                        # Export the path to make Node.js globally available
                        export PATH=$(nvm which $NODE_VERSION | xargs dirname):$PATH
                        
                        # Verify Node.js and npm versions
                        node -v
                        npm -v
                    '''
                }
            }
        }

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
                    // Re-source nvm and use the correct Node.js version
                    sh '''
                        . ~/.nvm/nvm.sh
                        nvm use $NODE_VERSION
                        npm install
                    '''
                }
            }
        }

        stage('Run Cypress Tests') {
            steps {
                script {
                    // Re-source nvm and use the correct Node.js version
                    sh '''
                        . ~/.nvm/nvm.sh
                        nvm use $NODE_VERSION
                        npx cypress run
                    '''
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
