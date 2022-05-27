# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "parkeraddison"
  spec.version       = "0.1.0"
  spec.authors       = ["Parker Addison"]
  spec.email         = ["pargrey@gmail.com"]

  spec.summary       = "Theme to be used for parkeraddison.com"
  spec.homepage      = "https://parkeraddison.com"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "github-pages", "226"
  spec.add_runtime_dependency "jekyll", ">= 3.9", "< 5.0"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.15"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.8"

  spec.add_development_dependency "bundler"
end
