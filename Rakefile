GH_PAGES_DIR = "compiled_site"
GITHUB_REPONAME = "bisraelsen.github.io"

desc "Build Jekyll site and copy files"
task :build do
      system "bundle exec jekyll serve --force_polling"
        system "rm -r ../#{GH_PAGES_DIR}/*" unless Dir['../#{GH_PAGES_DIR}/*'].empty?
          system "cp -r _site/* ../#{GH_PAGES_DIR}/"
            system "cd ../#{GH_PAGES_DIR}/"
            system "git init"
            system "git remote add origin https://github.com/#{GITHUB_REPONAME}.git"
            system "git checkout -b master"
            system "git add ."
            message = "Site updated at #{Time.now.utc}"
            system "git commit -m #{message.inspect}"
end
