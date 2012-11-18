<?php
    class EchoClass {
        /**
         * @remotable
         */
        public function call($string){
            return strtoupper($string);
        }

        /**
         * @remotable
         */
        public function who(){
            return "I am ". $_SERVER['SERVER_NAME']. "\nYou are ". $_SERVER['REMOTE_ADDR'];
        }
    }
?>
