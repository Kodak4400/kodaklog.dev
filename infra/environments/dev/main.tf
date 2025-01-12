terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "~> 5.8"
    }
  }
  required_version = ">= 1.9.0, < 2.0.0"

  backend "s3" {
    bucket = "dev.kodaklog.terraform.state"
    key = "terraform.tfstate"
    region = "ap-northeast-1"
    dynamodb_table = "dev-kodaklog-terraform-state-lock"
  }
}

provider "aws" {
  region = "ap-northeast-1"

  default_tags {
    tags = {
      Project = "dev-kodaklog"
      ManagedBy = "Terraform"
    }
  }
}

module "common_s3" {
  source = "../../common/s3"
  environment = local.env.environment
  project_prefix = local.env.project_prefix
}

module "common_dynamodb" {
  source = "../../common/dynamodb"
  environment = local.env.environment
  project_prefix = local.env.project_prefix
}
