// Declarative Pipeline
pipeline  {
  environment {
    registry = "victoryeo00/nodejsprog"
    registryCredential = 'dockerhub'
    dockerImage = ''
  }

  agent any
  tools {nodejs "nodejs"}
  stages {
    stage('Source') {
      steps { 
        // Get some code from our Git repository
        checkout scmGit( 
          [url: 'git@gitlab.com:h3279/token-user-service.git']
        )
      }
    }
    stage('Install') {
      steps {
        echo "install"
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        echo "test"
        sh 'npm run test'
      }
    }    
    stage('Build Docker Image') {
      steps {
        script {
            dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }

    stage('Deploy Docker Image to Dockerhub') {
      steps {
          script {
              docker.withRegistry('', registryCredential) {
              dockerImage.push()
              }
          }
      }
    }

    stage('Cleaning Up Docker Image') {
      steps{
        sh "docker rmi --force $registry:$BUILD_NUMBER"
      }
    }
  }
}
