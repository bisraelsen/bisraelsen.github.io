GH_PAGES_DIR = "compiled_site"
GITHUB_REPONAME = "bisraelsen/bisraelsen.github.io"

desc "Build Jekyll site and copy files"
task :build do
	system "rm -rf _site/"
	system "bundle exec jekyll build"
	system "rm -r ../#{GH_PAGES_DIR}/*" unless Dir['../#{GH_PAGES_DIR}/*'].empty?
	system "cp -r _site/* ../#{GH_PAGES_DIR}/"
	system "cd ../#{GH_PAGES_DIR}/"
end
