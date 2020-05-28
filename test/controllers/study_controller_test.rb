require 'test_helper'

class StudyControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get study_index_url
    assert_response :success
  end

end
