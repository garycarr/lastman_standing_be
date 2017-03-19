#!/usr/bin/env groovy
node {
    stage 'pull repo'
    checkout scm

    stage 'docker build'
    sh "docker build -t ${env.JOB_NAME}-${env.BUILD_ID} ."
}
