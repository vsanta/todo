
namespace :travis do
  desc "runs migrations, rspec specs, then jasmine specs"
  task :ci => ["db:migrate", "spec", "xvfb_setup", "jasmine:ci"]

  task :xvfb_setup do
    ENV["DISPLAY"] = ":99.0"
  end
end

desc "run tests for travis ci build"
task :travis => "travis:ci"
