<?php
session_start();

// Include ExtDirect PHP Helpers
require_once('ExtDirect/API.php');
require_once('ExtDirect/CacheProvider.php');

$cache = new ExtDirect_CacheProvider('cache/api_cache.txt');
$api = new ExtDirect_API();

$api->setRouterUrl('server/router.php'); // default
$api->setCacheProvider($cache);
//$api->setNamespace('Ext.api');
$api->setDescriptor('Ext.app.REMOTING_API');
$api->setDefaults(array(
    'autoInclude' => true,
    'basePath' => 'classes'
));

$api->add(
    array(
        'EchoClass',
        'Members'
    )
);

$api->output();

$_SESSION['ext-direct-state'] = $api->getState();

/* example of what you can do
// Include ExtDirect PHP Helpers
require_once('ExtDirect/API.php');
require_once('ExtDirect/CacheProvider.php');

// Including one Class myself just for testing purposes
require_once('classes/UserAction.php');


$cache = new ExtDirect_CacheProvider('cache/api_cache.txt');
$api = new ExtDirect_API();

$api->setRouterUrl('router.php'); // default
$api->setCacheProvider($cache);
$api->setNamespace('Ext.ss');
$api->setRemoteAttribute('@remotable'); // default
$api->setFormAttribute('@formHandler'); // default
$api->setDefaults(array(
    'autoInclude' => true,  // if you want to use this you have to make sure that your classes (without the prefix)
                            // are named consistent with the filename and that only one class exists in each file.
    'basePath' => 'classes'
));

$api->add(
    array( // an array with all the classnames.
        'LoginAction' => array('prefix' => 'Test_'), // you can set settings for individual classes
        'SubscriptionAction',
        'TeamAction' => array('subPath' => 'Subfolder'), // you can specify classes in a subfolder
        'TemplateAction',
        'TicketAction',
        'UserAction' => array('autoInclude' => false)
    ), array( // settings for this batch of classes
        'prefix' => '' // you could use this if your classes have a prefix, defaults to empty string
    )
);

$api->output();
*/
