class DatabaseController < ApplicationController
  def index
  end

  def math_1
    @unit= Unit.all
    @section = Section.all
  end
end
