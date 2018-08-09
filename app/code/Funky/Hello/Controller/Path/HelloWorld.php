<?php
  namespace Funky\Hello\Controller\Path;
  use Magento\Framework\App\Action\Action;
  use Magento\Framework\App\Action\ResponseInterface;


  class HelloWorld extends Action{

    protected $_pageFactory;

	public function __construct(
		\Magento\Framework\App\Action\Context $context,
		\Magento\Framework\View\Result\PageFactory $pageFactory)
	{
		$this->_pageFactory = $pageFactory;
		return parent::__construct($context);
	}

	public function execute()
	{
		echo "Hello World";
		exit;
	}
  }
