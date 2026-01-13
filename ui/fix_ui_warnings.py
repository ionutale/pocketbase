import os
import re

root_dir = '/Users/ionutale/developer/pocketbase/ui/src'

# Pattern for self-closing tags: <tag ... />
# Captures: 1: tag name, 2: attributes (including whitespace)
# We don't mistakenly capture <tag /> inside a string because HTML parsing with regex is fragile BUT 
# in Svelte components, top-level structure usually respects this.
# Minimizing risk by being specific about tags: i, div, span, label, textarea, canvas, button
tag_pattern = re.compile(r'<(i|div|span|label|textarea|canvas|button)(\s+[^>]*?|\s*)\/>')

def fix_self_closing(match):
    tag = match.group(1)
    attrs = match.group(2)
    return f'<{tag}{attrs}></{tag}>'

count = 0

for dirpath, dirnames, filenames in os.walk(root_dir):
    for filename in filenames:
        if filename.endswith('.svelte'):
            filepath = os.path.join(dirpath, filename)
            with open(filepath, 'r') as f:
                content = f.read()
            
            new_content = tag_pattern.sub(fix_selimport os
import re

root_dir   
         
root_diPoi
# Pattern for self-closing tags: <tag ... />
# CapturentF# Captures: 1: tag name, 2: attributes (inct # We don't mistakenly capture <tag /> inside a string becaus n# in Svelte components, top-level structure usually respects this.
# Minimizing risk by being specifst# Minimizing risk by being specific about tags: i, div, span, la hatag_pattern = re.compile(r'<(i|div|span|label|textarea|canvas|button)(\s+[^>]*?|\s*)\/>')

dco
def fix_self_closing(match):
    tag = match.group(1)
    attrs = match.group(2)
    refil    tag = match.group(1)
        attrs = match.gr_cont    return f'<{tag}{atount 
count = 0

for dirpath, dirnames, fil
for dir SC    for filename in filenames:
        if filename.en_p        if filename.endswith('s            filepath = os.path.join(dirri            with open(filepath, 'r') as f:
          co                content = f.read()
      on            se "sass:string";' not           :
 import re

root_dir   
         
root_diPoi
# Pattern for@u
root_di:st         
+ content.replace('str-# CapturentF# Captures: 1: tag name, 2: att(g# Minimizing risk by being specifst# Minimizing risk by being specific about taid_path}")

