pipeline{
    agent any
    stages{
        stage('checkout'){
            steps{
                checkout scm
            }
        }
        stage('Build and push'){
            steps{
                script{
                    dockerBuildAndPush('api_gateway')
                }
            }
        }
    }
}

def dockerBuildAndPush(servicename){
    dir(servicename){
        sh "docker build -t hunais/${servicename}:latest ."

        withCredentials([usernamePassword(credentialsId:'hunais',passwordVariable:'DOCKER_PASSWORD',usernameVariable:'DOCKER_USERNAME')]){
            sh "docker login -u ${DOCKER_USERNAME} -P ${DOCKER_PASSWORD}"
            sh "docker push hunais/${servicename}:latest"
        }
    }
}