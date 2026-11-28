# Builds the models of the Blender version and writes them, as .lhm files (see pack.py), into src/models/.
#   "C:\Program Files\Blender Foundation\Blender 5.3\blender.exe" --background --factory-startup --python blender/build.py -- [people west]
import sys, os
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
OUT = os.path.join(HERE, '..', 'src', 'models')
os.makedirs(OUT, exist_ok=True)
want = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else []
from lib import reset
from pack import export_building

if not want or 'people' in want:
    import people
    people.build(os.path.join(OUT, 'people.lhm'))
if not want or 'west' in want:
    import town
    reset()
    export_building(os.path.join(OUT, 'west.lhm'), town.build())
if not want or 'japan' in want:
    import village
    reset()
    export_building(os.path.join(OUT, 'japan.lhm'), village.build_japan())
if not want or 'swiss' in want:
    import village
    reset()
    export_building(os.path.join(OUT, 'swiss.lhm'), village.build_swiss())
for ch in ('west', 'japan', 'swiss'):
    if not want or 'scenery' in want or (ch + '-scenery') in want:
        import refine
        refine.build(ch, os.path.join(OUT, ch + '-scenery.lhm'))
