require 'minitest/autorun'
require 'minitest/rg'
require_relative './testing_task_2'

class TestTask < Minitest::Test

    def test_func1
        result = func1(1)
        expected = true
        assert_equal(expected, result)

        result = func1(2)
        expected = false
        assert_equal(expected, result)
    end

    def test_looper
        result = looper
        expected = 10
        assert_equal(expected, result)
    end

    def test_max
        result = max(100, 20)
        expected = 100
        assert_equal(expected, result)

        result = max(10, 20)
        expected = 20
        assert_equal(expected, result)
    end

end
