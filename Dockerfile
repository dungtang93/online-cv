FROM docker/dev-environments-default:stable-1

# switch to user 'vscode' to use gem as this is recommended practice
USER vscode

RUN sudo apt-get update && \
    sudo apt-get install -y ruby-full build-essential zlib1g-dev

# RUN echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc && \
#     echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc && \
#     echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc

ENV HOME=/home/vscode
COPY --chown=vscode . ${HOME}/src
ENV GEM_HOME=${HOME}/gems
ENV PATH=${GEM_HOME}/bin:$PATH

WORKDIR ${HOME}/src

RUN gem install bundler jekyll && \
    bundle install