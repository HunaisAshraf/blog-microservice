pipeline{
    agent any
    environment{
        DOCKER_CREDENTIALS = credentials('hunaisdocker')
    }
    stages{
        stage('checkout'){
            steps{
                checkout scm
            }
        }
        stage('Build and push'){
            steps{
                script{
                    dockerBuildAndPush('api_gateway',DOCKER_CREDENTIALS_PSW,DOCKER_CREDENTIALS_USR)
                    dockerBuildAndPush('auth',DOCKER_CREDENTIALS_PSW,DOCKER_CREDENTIALS_USR)
                    dockerBuildAndPush('posts',DOCKER_CREDENTIALS_PSW,DOCKER_CREDENTIALS_USR)
                    dockerBuildAndPush('comments',DOCKER_CREDENTIALS_PSW,DOCKER_CREDENTIALS_USR)
                }
            }
        }
    }
}

def dockerBuildAndPush(servicename,password,user){
    dir(servicename){
        sh "docker build -t hunais/${servicename}:latest ."      
        sh "docker login -u ${user} -P ${password}"
        sh "docker push hunais/${servicename}:latest"
        // withCredentials([usernamePassword(credentialsId:'hunaisdocker',passwordVariable:'DOCKER_PASSWORD',usernameVariable:'DOCKER_USERNAME')]){
        // }
    }
}
