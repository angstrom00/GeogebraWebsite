require 'test_helper'

class DatabaseControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get database_index_url
    assert_response :success
  end

end
