# vk-news
Hey guys this is my sample news-app created via ionic framework and capacitor plugins.

<h1>Steps to make it runnable in your PC: </h1>

<p>
  <ul>
    <li>
      Firstly, download and install nodejs from <a href="https://nodejs.org/en/download/" target="_blank">here</a>.
    </li>
    <li>
      After that install ionic framework via this command.<br>
      <code>
        npm i -g ionic
      </code>
    </li>
    <li>
      Clone/ Download this directory, open your console with this directory path and type following command:<br>
      <code>
        npm i
      </code>
      <br><br>
      This will install all necessary dependencies that are required.
    </li>
    <li>
      After that type: <br>
      <code>
        ionic s
      </code>
      <br><br>
      After <b>Compiled successfully</b> message shown on terminal. Go to <br>
      <a href="http://localhost:8100/">http://localhost:8100/</a>
    </li>
    <li>
      Now the above command will make it runnable on the web browser. For making it runnable in native device, follow these steps:
      <ul>
      <li>
        On same command prompt type: <br>
        <code>
          ionic capacitor add android
        </code>
      </li>
      <li>
        It'll show an error, no worries simply type <br>
        <code>
          ng build
        </code>
      </li>
      <li>
        After that, type again <br>
        <code>
          ionic capacitor add android/ ios
        </code><br><br>
        No error will be seen this time.
      </li>
      <li>
        Then type: <br>
        <code>
          ionic capacitor copy android/ ios
        </code><br>
        <code>
          ionic capacitor run android/ ios
        </code>
       </li>
        <li>
        This will open Android studio( <a href="https://developer.android.com/studio?gclid=CjwKCAiAuqHwBRAQEiwAD-zr3V_NM-eVOmzAoCo4WGDhadk9RzYcUr6I6QKn3u_cdthapQF60lgpKxoC8IAQAvD_BwE">Download and install here</a> ).
        </li>
      </ul><br>
      <p>Thats it you will get a runnable apk on your native device (android/ ios).</p>
    </li>  
  </ul>  
</p>  
