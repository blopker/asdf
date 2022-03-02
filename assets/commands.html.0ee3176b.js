import{b as n}from"./app.0e7b70bd.js";const s={},a=n('<h1 id="所有命令" tabindex="-1"><a class="header-anchor" href="#所有命令" aria-hidden="true">#</a> 所有命令</h1><p><code>asdf</code> 中所有可用命令的列表。这个列表就是 <code>asdf help</code> 命令的打印内容。</p><div class="language-txt ext-txt line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">MANAGE PLUGINS\nasdf plugin add &lt;name&gt; [&lt;git-url&gt;]      Add a plugin from the plugin repo OR,\n                                        add a Git repo as a plugin by\n                                        specifying the name and repo url\nasdf plugin list [--urls] [--refs]      List installed plugins. Optionally show\n                                        git urls and git-ref\nasdf plugin list all                    List plugins registered on asdf-plugins\n                                        repository with URLs\nasdf plugin remove &lt;name&gt;               Remove plugin and package versions\nasdf plugin update &lt;name&gt; [&lt;git-ref&gt;]   Update a plugin to latest commit on\n                                        default branch or a particular git-ref\nasdf plugin update --all                Update all plugins to latest commit on\n                                        default branch\n\n\nMANAGE PACKAGES\nasdf install                            Install all the package versions listed\n                                        in the .tool-versions file\nasdf install &lt;name&gt;                     Install one tool at the version\n                                        specified in the .tool-versions file\nasdf install &lt;name&gt; &lt;version&gt;           Install a specific version of a package\nasdf install &lt;name&gt; latest[:&lt;version&gt;]  Install the latest stable version of a\n                                        package, or with optional version,\n                                        install the latest stable version that\n                                        begins with the given string\nasdf uninstall &lt;name&gt; &lt;version&gt;         Remove a specific version of a package\nasdf current                            Display current version set or being\n                                        used for all packages\nasdf current &lt;name&gt;                     Display current version set or being\n                                        used for package\nasdf where &lt;name&gt; [&lt;version&gt;]           Display install path for an installed\n                                        or current version\nasdf which &lt;command&gt;                    Display the path to an executable\nasdf local &lt;name&gt; &lt;version&gt;             Set the package local version\nasdf local &lt;name&gt; latest[:&lt;version&gt;]    Set the package local version to the\n                                        latest provided version\nasdf global &lt;name&gt; &lt;version&gt;            Set the package global version\nasdf global &lt;name&gt; latest[:&lt;version&gt;]   Set the package global version to the\n                                        latest provided version\nasdf shell &lt;name&gt; &lt;version&gt;             Set the package version to\n                                        `ASDF_${LANG}_VERSION` in the current shell\nasdf latest &lt;name&gt; [&lt;version&gt;]          Show latest stable version of a package\nasdf latest --all                       Show latest stable version of all the\n                                        packages and if they are installed\nasdf list &lt;name&gt; [version]              List installed versions of a package and\n                                        optionally filter the versions\nasdf list all &lt;name&gt; [&lt;version&gt;]        List all versions of a package and\n                                        optionally filter the returned versions\nasdf help &lt;name&gt; [&lt;version&gt;]            Output documentation for plugin and tool\n\n\nUTILS\nasdf exec &lt;command&gt; [args...]           Executes the command shim for current version\nasdf env &lt;command&gt; [util]               Runs util (default: `env`) inside the\n                                        environment used for command shim execution.\nasdf info                               Print OS, Shell and ASDF debug information.\nasdf reshim &lt;name&gt; &lt;version&gt;            Recreate shims for version of a package\nasdf shim-versions &lt;command&gt;            List the plugins and versions that\n                                        provide a command\nasdf update                             Update asdf to the latest stable release\nasdf update --head                      Update asdf to the latest on the master branch\n\nRESOURCES\nGitHub: https://github.com/asdf-vm/asdf\nDocs:   https://asdf-vm.com\n</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br></div></div>',3);s.render=function(n,s){return a};export default s;
