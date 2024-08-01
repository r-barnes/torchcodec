Search.setIndex({"docnames": ["api_ref_decoders", "generated/torchcodec.decoders.Frame", "generated/torchcodec.decoders.FrameBatch", "generated/torchcodec.decoders.SimpleVideoDecoder", "generated/torchcodec.decoders.VideoStreamMetadata", "generated_examples/basic_example", "generated_examples/index", "generated_examples/sg_execution_times", "glossary", "index", "install_instructions", "sg_execution_times"], "filenames": ["api_ref_decoders.rst", "generated/torchcodec.decoders.Frame.rst", "generated/torchcodec.decoders.FrameBatch.rst", "generated/torchcodec.decoders.SimpleVideoDecoder.rst", "generated/torchcodec.decoders.VideoStreamMetadata.rst", "generated_examples/basic_example.rst", "generated_examples/index.rst", "generated_examples/sg_execution_times.rst", "glossary.rst", "index.rst", "install_instructions.rst", "sg_execution_times.rst"], "titles": ["torchcodec.decoders", "Frame", "FrameBatch", "SimpleVideoDecoder", "VideoStreamMetadata", "Decoding a video with SimpleVideoDecoder", "Interactive examples", "Computation times", "Glossary", "Welcome to the TorchCodec documentation!", "Installation Instructions", "Computation times"], "terms": {"class": [1, 2, 3, 4, 5], "torchcodec": [1, 2, 3, 4, 5, 8, 10], "decod": [1, 2, 3, 4, 6, 7, 8, 9, 10, 11], "data": [1, 2, 3, 5], "tensor": [1, 2, 3, 5, 9], "pts_second": [1, 2, 5], "float": [1, 2, 3, 4], "duration_second": [1, 2, 4, 5], "sourc": [1, 2, 3, 4, 5, 6], "A": [1, 3, 8, 9], "singl": [1, 3, 4, 5], "video": [1, 2, 3, 4, 6, 7, 8, 9, 11], "associ": [1, 2], "metadata": [1, 2, 3, 4, 5, 8], "exampl": [1, 2, 3, 4, 5, 7, 9, 11], "us": [1, 2, 3, 4, 9], "simplevideodecod": [1, 2, 4, 6, 7, 11], "The": [1, 2, 3, 5, 8, 9, 10], "3": [1, 5], "d": [1, 2, 5], "torch": [1, 2, 3, 5], "durat": [1, 2, 4], "second": [1, 2, 3, 4, 5, 8], "pt": [1, 2, 4, 8], "multipl": [2, 3], "frame": [2, 3, 4, 8], "4": [2, 10], "1": [2, 3, 4, 5, 7, 11], "union": 3, "str": [3, 4, 5], "path": [3, 5], "byte": [3, 5], "dimension_ord": [3, 5], "liter": 3, "nchw": 3, "nhwc": 3, "stream": [3, 4, 8], "If": [3, 4, 9], "contain": [3, 5], "best": [3, 4, 8], "thi": [3, 4, 5], "alwai": [3, 5], "perform": [3, 4], "scan": [3, 4, 8], "paramet": [3, 5], "pathlib": 3, "local": [3, 5], "file": [3, 5, 7, 8, 11], "object": [3, 4, 5], "raw": [3, 5], "encod": [3, 5], "option": [3, 4, 5, 10], "dimens": [3, 5], "order": [3, 5], "can": [3, 5, 10], "either": 3, "default": [3, 5], "where": [3, 5], "n": [3, 5], "batch": [3, 5], "size": [3, 5], "c": [3, 5, 10], "number": [3, 4, 5], "channel": [3, 5], "h": [3, 5], "height": [3, 4, 5], "w": [3, 5], "width": [3, 4, 5], "ar": [3, 5, 8, 9, 10], "nativ": 3, "format": 3, "underli": [3, 10], "ffmpeg": [3, 8, 10], "implement": 3, "convert": 3, "those": 3, "cheap": 3, "copi": 3, "oper": 3, "allow": 3, "transform": [3, 5], "torchvis": [3, 5], "variabl": 3, "videostreammetadata": [3, 5], "__getitem__": 3, "kei": 3, "int": [3, 4, 5], "slice": [3, 5], "return": [3, 5], "given": 3, "index": [3, 4], "rang": 3, "s": [3, 4], "retriev": [3, 4, 8], "type": [3, 5], "get_frame_at": [3, 5], "get_frame_displayed_at": [3, 4, 5], "displai": [3, 4, 5, 8], "timestamp": 3, "time": [3, 4, 8, 10], "stamp": [3, 5, 8], "when": [3, 5], "get_frames_at": [3, 5], "start": [3, 5, 9], "stop": [3, 5], "step": [3, 5], "framebatch": [3, 5], "first": [3, 4, 5], "end": [3, 4], "exclus": 3, "per": [3, 5], "python": [3, 5, 6], "convent": 3, "between": 3, "within": [3, 4], "specifi": 3, "duration_seconds_from_head": [4, 5], "bit_rat": [4, 5], "num_frames_from_head": [4, 5], "num_frames_from_cont": [4, 5], "begin_stream_second": [4, 5], "end_stream_second": [4, 5], "codec": [4, 5], "average_fps_from_head": [4, 5], "stream_index": [4, 5], "properti": 4, "average_fp": [4, 5], "averag": 4, "fp": 4, "wa": 4, "perfom": 4, "comput": 4, "from": [4, 5, 7, 10, 11], "otherwis": 4, "we": [4, 5, 9, 10], "fall": 4, "back": 4, "aver": 4, "obtain": 4, "header": 4, "none": [4, 5], "recommend": 4, "attribut": [4, 5], "instead": 4, "begin": 4, "conceptu": 4, "correspond": [4, 8], "It": [4, 8], "min": 4, "across": 4, "all": [4, 6, 10, 11], "usual": 4, "equal": 4, "0": [4, 5, 7, 11], "bit": [4, 5], "rate": 4, "try": [4, 5], "calcul": 4, "actual": 4, "could": 4, "inaccur": 4, "last_fram": [4, 5], "max": 4, "note": [4, 10], "valu": [4, 5], "so": [4, 5, 8], "call": 4, "would": 4, "result": 4, "an": [4, 8, 9], "error": 4, "last": [4, 5], "done": 4, "simpli": 4, "num_fram": [4, 5], "made": 4, "content": [4, 5], "doesn": 4, "t": 4, "involv": [4, 8], "more": [4, 5], "accur": 4, "than": [4, 5, 8], "potenti": 4, "In": [5, 8], "ll": 5, "learn": 5, "how": [5, 9], "boilerpl": 5, "download": [5, 6], "web": 5, "defin": 5, "plot": 5, "util": [5, 9], "you": [5, 9, 10], "ignor": 5, "part": 5, "jump": 5, "right": 5, "below": 5, "import": 5, "request": 5, "http": 5, "www": 5, "pexel": 5, "com": 5, "dog": 5, "eat": 5, "854132": 5, "licens": 5, "cc0": 5, "author": 5, "coverr": 5, "url": 5, "sd_640_360_25fp": 5, "mp4": 5, "respons": 5, "get": [5, 9], "status_cod": 5, "200": 5, "rais": 5, "runtimeerror": 5, "f": 5, "fail": 5, "raw_video_byt": 5, "def": 5, "titl": 5, "make_grid": 5, "v2": 5, "function": 5, "to_pil_imag": 5, "matplotlib": 5, "pyplot": 5, "plt": 5, "except": 5, "importerror": 5, "print": 5, "cannot": 5, "pleas": [5, 9], "run": 5, "pip": [5, 10], "instal": [5, 9], "rcparam": 5, "savefig": 5, "bbox": 5, "tight": 5, "fig": 5, "ax": 5, "subplot": 5, "imshow": 5, "set": 5, "xticklabel": 5, "yticklabel": 5, "xtick": 5, "ytick": 5, "set_titl": 5, "tight_layout": 5, "now": [5, 10], "cours": 5, "pass": [5, 8], "input": 5, "rather": 5, "also": [5, 10], "ha": 5, "yet": 5, "been": 5, "alreadi": 5, "have": [5, 9], "access": 5, "some": 5, "via": 5, "which": [5, 8, 10], "345": 5, "13": 5, "8": 5, "25": 5, "505790": 5, "h264": 5, "640": 5, "360": 5, "first_fram": 5, "every_twenty_fram": 5, "20": 5, "shape": 5, "dtype": 5, "uint8": 5, "18": 5, "By": 5, "onli": [5, 10], "present": [5, 8], "re": 5, "one": 5, "chang": [5, 10], "everi": 5, "normal": 5, "like": [5, 8], "assert": 5, "isinst": 5, "pure": 5, "sometim": 5, "addit": 5, "inform": 5, "about": [5, 8], "achiev": 5, "method": 5, "respect": 5, "len": 5, "_simple_video_decod": 5, "760000228881836": 5, "03999999910593033": 5, "middle_fram": 5, "10": 5, "2": 5, "5": 5, "4000": 5, "4800": 5, "5600": 5, "6400": 5, "7200": 5, "0400": 5, "middl": 5, "both": 5, "field": 5, "thei": 5, "far": 5, "frame_at_2_second": 5, "total": [5, 7, 11], "script": 5, "minut": 5, "864": [5, 7, 11], "jupyt": [5, 6], "notebook": [5, 6], "basic_exampl": [5, 7, 9, 11], "ipynb": 5, "code": [5, 6], "py": [5, 7, 11], "zip": [5, 6], "galleri": [5, 6, 11], "gener": [5, 6], "sphinx": [5, 6], "generated_examples_python": 6, "generated_examples_jupyt": 6, "00": [7, 11], "01": [7, 11], "execut": [7, 11], "generated_exampl": [7, 9], "mem": [7, 11], "mb": [7, 11], "should": [8, 10], "express": 8, "notion": 8, "determin": [8, 10], "quot": 8, "doc": 8, "accord": 8, "variou": 8, "heurist": 8, "most": [8, 10], "what": 8, "user": 8, "expect": 8, "entir": 8, "over": [8, 10], "purpos": 8, "differ": [8, 10], "doe": 8, "lot": 8, "cheaper": 8, "provid": 9, "pytorch": [9, 10], "still": 9, "earli": 9, "develop": 9, "stage": 9, "activ": 9, "seek": 9, "feedback": 9, "ani": 9, "suggest": 9, "issu": 9, "let": 9, "know": 9, "open": 9, "our": 9, "github": 9, "repositori": 9, "instruct": 9, "install_instruct": 9, "html": 9, "simpl": [9, 10], "api": 9, "refer": 9, "api_ref_decod": 9, "avail": 10, "linux": 10, "plan": 10, "support": 10, "other": 10, "platform": 10, "futur": 10, "need": 10, "work": 10, "follow": 10, "offici": 10, "your": 10, "system": 10, "capabl": 10, "There": 10, "e": 10, "g": 10, "conda": 10, "forg": 10, "distribut": 10, "probabl": 10, "come": 10, "pre": 10, "well": 10, "major": 10, "version": 10, "7": 10, "mai": 10, "slightli": 10, "up": 10, "date": 10, "readm": 10}, "objects": {"torchcodec.decoders": [[1, 0, 1, "", "Frame"], [2, 0, 1, "", "FrameBatch"], [3, 0, 1, "", "SimpleVideoDecoder"], [4, 0, 1, "", "VideoStreamMetadata"]], "torchcodec.decoders.Frame": [[1, 1, 1, "", "data"], [1, 1, 1, "", "duration_seconds"], [1, 1, 1, "", "pts_seconds"]], "torchcodec.decoders.FrameBatch": [[2, 1, 1, "", "data"], [2, 1, 1, "", "duration_seconds"], [2, 1, 1, "", "pts_seconds"]], "torchcodec.decoders.SimpleVideoDecoder": [[3, 2, 1, "", "__getitem__"], [3, 2, 1, "", "get_frame_at"], [3, 2, 1, "", "get_frame_displayed_at"], [3, 2, 1, "", "get_frames_at"]], "torchcodec.decoders.VideoStreamMetadata": [[4, 3, 1, "", "average_fps"], [4, 1, 1, "", "average_fps_from_header"], [4, 1, 1, "", "begin_stream_seconds"], [4, 1, 1, "", "bit_rate"], [4, 1, 1, "", "codec"], [4, 3, 1, "", "duration_seconds"], [4, 1, 1, "", "duration_seconds_from_header"], [4, 1, 1, "", "end_stream_seconds"], [4, 1, 1, "", "height"], [4, 3, 1, "", "num_frames"], [4, 1, 1, "", "num_frames_from_content"], [4, 1, 1, "", "num_frames_from_header"], [4, 1, 1, "", "stream_index"], [4, 1, 1, "", "width"]]}, "objtypes": {"0": "py:class", "1": "py:attribute", "2": "py:method", "3": "py:property"}, "objnames": {"0": ["py", "class", "Python class"], "1": ["py", "attribute", "Python attribute"], "2": ["py", "method", "Python method"], "3": ["py", "property", "Python property"]}, "titleterms": {"torchcodec": [0, 9], "decod": [0, 5], "frame": [1, 5], "framebatch": 2, "simplevideodecod": [3, 5], "videostreammetadata": 4, "video": 5, "creat": 5, "index": 5, "iter": 5, "over": 5, "retriev": 5, "pt": 5, "durat": 5, "us": 5, "time": [5, 7, 11], "base": 5, "interact": 6, "exampl": 6, "comput": [7, 11], "glossari": 8, "welcom": 9, "document": 9, "instal": 10, "instruct": 10}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx.ext.todo": 2, "sphinx.ext.viewcode": 1, "sphinx": 56}})